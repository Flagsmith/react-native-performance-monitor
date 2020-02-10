require('@babel/polyfill');

const { join } = require('path');
const cacheableResponse = require('cacheable-response');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const IS_SSR_CACHE_ENABLED = !dev; // TODO move to config

// TODO: move to config
// Default 1 hour ttl
const ssrCache = (ttl) => {
    return cacheableResponse({
        ttl, // 1hour
        get: async ({ req, res, pagePath, queryParams }) => {
            console.log('Caching', req.url); // eslint-disable-line no-console
            return ({
                data: await app.renderToHTML(req, res, pagePath, queryParams),
            });
        },
        send: ({ data, res }) => res.send(data),
    });
};

Promise.all([
    app.prepare(),
]).then(() => {
    const server = express();
    const sw = join(__dirname, '.next/service-worker.js');
    const favicon = join(__dirname, '/static/images/favicon.ico');
    const sitemap = join(__dirname, '/static/sitemap.xml');
    const robots = join(__dirname, '/static/robots.txt');
    const apple = join(__dirname, '/static/apple-app-site-association');

    server.get('/sitemap.xml', (req, res) => {
        app.serveStatic(req, res, sitemap);
    });

    server.get('/robots.txt', (req, res) => {
        app.serveStatic(req, res, robots);
    });

    server.get('/favicon.ico', (req, res) => {
        app.serveStatic(req, res, favicon);
    });

    server.get('/service-worker.js', (req, res) => {
        app.serveStatic(req, res, sw);
    });

    server.get('/apple-app-site-association', (req, res) => {
        // req.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Type', 'application/json');
        app.serveStatic(req, res, apple);
    });

    if (IS_SSR_CACHE_ENABLED) {
        const homeCache = ssrCache(1000 * 60 * 60);
        server.get('/', (req, res) => {
            const queryParams = { id: req.params.id };
            const pagePath = '/';
            return homeCache({ req, res, pagePath, queryParams });
        });
    }

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
    });
});

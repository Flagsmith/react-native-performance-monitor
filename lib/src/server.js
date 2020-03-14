const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

module.exports = function () {
    const wss = new WebSocket.Server({
        port: 8126,
    });

    http.createServer((request, response) => {
        if (request.url === '/value') {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(body);
                    }
                });
            });

            response.end();
        }
        let filePath = `./out${request.url}`;
        if (filePath == './out/') filePath = './out/index.html';
        filePath = path.join(__dirname, filePath);

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.svg':
                contentType = 'image/svg+xml';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }
        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code == 'ENOENT') {
                    fs.readFile('./404.html', (error, content) => {
                        response.writeHead(200, { 'Content-Type': contentType });
                        response.end(content, 'utf-8');
                    });
                } else {
                    response.writeHead(500);
                    response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
                    response.end();
                }
            } else {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });
    }).listen(8125);

    wss.on('connection', (ws) => {
        ws.on('message', (data) => {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });
    });

    console.log('Server running at http://127.0.0.1:8125/');
};

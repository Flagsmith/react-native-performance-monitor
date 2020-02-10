import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import '../project/polyfill';

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Container>
                <React.Fragment>
                    <Head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                        <meta
                          name="description"
                          content={Constants.descriptions.home}
                        />
                        <meta
                          name="keywords"
                          content={Constants.keywords.home}
                        />
                        <title>
                            {Constants.titles.home}
                        </title>
                        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png"/>
                        <link
                          rel="icon" type="image/png" sizes="32x32"
                          href="/static/images/favicon-32x32.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="16x16"
                          href="/static/images/favicon-16x16.png"
                        />
                        <link
                          rel="icon" type="image/png" sizes="192x192"
                          href="/static/images/favicon-192x192.png"
                        />
                        <meta name="theme-color" content="#2a93d6"/>
                        {/* Used to prevent a CSS flicker on chrome */}
                        <script type="text/javascript" src="/static/chromefix.js" />
                    </Head>
                    <Component {...this.props}/>
                </React.Fragment>
            </Container>
        );
    }
}

export default MyApp;

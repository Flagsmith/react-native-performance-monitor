---
title: Achieving a perfect 100% Google Lighthouse audit score with Next and Redux
published: true
description: Jumping down a satisfying rabbit hole with NextJS
tags: webdev, showdev, react, javascript
author: Kyle Johnson
avatar: /static/images/blog/kyle.png
date: 26-aug-2019
---

<img alt="100% lighthouse score" src="https://camo.githubusercontent.com/60e01c505310b31551ee45c7f8a144bc4c69cfcb/687474703a2f2f672e7265636f726469742e636f2f545938776369547351482e676966"/>

This post covers how we can build a React/NextJS app with Redux that achieves a 100% audit score with server-rendering, localisation support and can be installed as a PWA and navigated whilst offline.

## next.js

[next.js](https://nextjs.org) is my new favourite thing. Built specifically for react, NextJS lets you server render your react application with little compromise to how you would normally build your app.

Developing a React app will be pretty familiar, you'll have to switch out react-router with their built-in router, and be aware that your components will have to be executable in NodeJS (just like if you were unit testing them).

The main difference is this bit of magic which we can add to our pages:

```
// Calls before the page is mounted, the call will happen on the server if it's the first page we visit
static async getInitialProps({ ctx: { store } }) {
  await store.dispatch(AppActions.getWidgets());
  return {};
}
```

Any asynchronous tasks or fetching can occur here on our pages.

Rather than regurgitate all of the power of next, I'd recommend just stepping through their [getting started guide](https://nextjs.org/learn/basics/getting-started). This post details how I added redux, sagas and achieved a 100% score on Lighthouse.

## I'm bored, just send me the code.
[Fine](https://github.com/kyle-ssg/nextjs-redux). The project is also hosted at https://nextjs-redux.kyle-ssg.now.sh/. But read on if you're interested.

## 1. next.js with Redux
<img alt="NextJS routes" src="https://i.ibb.co/pZsxSRF/image.png"/>

Rather than defining routes within JavaScript, routes in next are based on what's in your /pages directory.
Next.js defines how pages are rendered with an App component, which we can customise by making our very own _app.js. Great, that means we can create our store and give it our root app component just like any other app.

```
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../common/store';
import withRedux from 'next-redux-wrapper';
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps;
        // Ensure getInitialProps gets called on our child pages
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <>
                        <Head>
                            {/*...script and meta tags*/}
                            <title>TheProject</title>
                        </Head>
                        <Header/>
                        <Component {...pageProps} />
                    </>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(MyApp);
```

Some of this will probably look familiar to you, the main differences being:

- In our route app, we need to make sure our pages getInitialProps functions are being called before rendering
- Next.js provides a Head component that lets us render out any standard tags that live inside the head, this can even be done per page. This is useful for adding opengraph/meta tags/titles per page.
- next-redux-wrapper is an out of box library that lets us use createStore.

**The outcome**

Adding a simple get widgets action we can see the following differences depending on if we loaded the page from landing straight on it vs navigating to it from another page.

<img alt="Client vs Server rendering" src="https://i.ibb.co/30xjFxy/image.png"/>

This happens because getInitialProps is called on the server during the initial page load, it knows which page to call it on based on the route.

## 2. Achieving a 100% Lighthouse score
Even locally, I noticed how fast everything felt. This leads me to wonder how performant I could get the page. Within chrome dev tools there's a great tool called L that rates your site based on several recognised best practices and meets the progressive web app standard.

### Baseline score
<img alt="Baseline lighthouse score" src="https://i.ibb.co/10VMz8W/image.png"/>

The baseline score was not too bad, with performance not being a problem for a redux page hitting an API.

## Accessibility

Most of these items are trivial to solve and involve employing best practices such as image alt tags, input roles and aria attributes.

### Appropriate colour contrast

<img alt="Lighthouse colour contrast" src="https://i.ibb.co/Y3FQhFk/image.png"/>

Lighthouse is clever enough to know which of your elements are not meeting the WCAG 2 AA contrast ratio thresholds, stating that your foreground and background should have a contrast ratio of at least 4.5:1 for small text or 3:1 for large text. You can run tools such as
 [Web AIM's contrast checker](https://webaim.org/resources/contrastchecker/). A quick CSS change fixed this but obviously, this will mean a good amount of refactoring for content-rich sites.

### Localisation

<img alt="Lighthouse localisation" src="https://i.ibb.co/wpFPGtb/image.png"/>

This one was a little more tricky. To do a good job of this I wanted the serverside render to detect the user's preferred locale and set the lang attribute as well as serve localised content. Searching around I did come across [next-i18next](https://github.com/isaachinman/next-i18next), however, I noticed that it doesn't support serverless and it's difficult to share locale strings with [react-native-localization](https://www.npmjs.com/package/react-native-localization).

I wanted something that would work with  [react-localization](https://www.npmjs.com/package/react-localization), so my approach was as follows:
- 1: When the document attempts to render on the server, we want to get the preferred locale and set the lang attribute to the HTML tag. This info comes from the server, either from a cookie which we could set or by parsing the [Accept-Language Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). A code snippet for how I did this can be found [!here](https://github.com/kyle-ssg/nextjs-redux/blob/master/project/api.js#L27 "Code snippet").
```
    // _document.js
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const locale = API.getStoredLocale(ctx.req);
        return { ...initialProps, locale };
    }
    ...
    render() {
        return (
            <html lang={this.props.locale}>
                ...
            </html>
        )
    }
```
- 2: I define some localised strings
```
// localization.js
import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
    en: {
        title: 'Hello EN',
    },
    'en-US': {
        title: 'Hello US',
    },
});

export default Strings;
```
- 3: I want my app to know what the locale is in a store so that I can use that information later.
```
    // _app.js
    static async getInitialProps({ Component, ctx }) {
        let pageProps;
        const locale = API.getStoredLocale(ctx.req); // Retrieve the locale from cookie or headers
        await ctx.store.dispatch(AppActions.startup({ locale })); // Post startup action with token and locale
        ...
    }
```

- 4: I set the language once in my app on the initial client **and** server render.
```
// _app.js
render(){
        if (!initialRender) {
            initialRender = true;
            const locale = store.getState().locale;
            if (locale) {
                Strings.setLanguage(locale);
            }
        }
    ...
}
```

- 5: In my pages, I am now free to use localised strings.
```
    // pages/index.js
     render() {
            return (
                <div className="container">
                    <h1>Home</h1>
                    {Strings.title}
                </div>
            );
      }
```

### Best practices
Since the project had pretty up to date libraries and didn't do anything unruly, this already had a good score. The only thing we had to do was use http2 and SSL, which is more down to how you're hosting the application. Using [Zeit](https://zeit.co/) covered both of these.

### SEO
Thanks to nextJS you can easily add meta tags on a per-page basis, even using dynamic data from getInitialProps.

### Progressive web app
<img alt="Lighthouse progressive web app" src="https://i.ibb.co/WkBg4yK/image.png"/>

PWAs make our web apps installable, combined with service workers we can serve content whilst the user is offline.

The first step was to add a simple manifest, this lets us configure how it should behave when installed.
```
/static/manifest.json
{
  "short_name": "Project Name",
  "name": "Project Name",
  "icons": [
    {
      "src": "/static/images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/static/images/icons-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/?source=pwa",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#3367D6"
}
```
```
//_app.js
<link rel="manifest" href="/static/manifest.json"/>
```

***Offline support with service workers***

Thanks to [next-offline](https://github.com/hanford/next-offline#readme), adding service worker support was simple. Getting the service worker to work with serverless and hosted on Zeit however was a bit fiddly, we had to add a route for our server to serve the correct content header.
```
// now.json
{
  "version": 2,
  "routes": [
    {
      "src": "^/service-worker.js$",
      "dest": "/_next/static/service-worker.js",
      "headers": {
        "Service-Worker-Allowed": "/"
      }
    }
    ...
  ]
}
```
And then configure next-offline to serve the service worker from static.
```
next.config.js
{
    target: 'serverless',
    // next-offline options
    workboxOpts: {
        swDest: 'static/service-worker.js',
```


## The result
As a result of this, we now have a solid base project with a 100% audit score, server-rendered, localised and can be installed and navigated whilst offline. Feel free to [Clone it and hack around](https://github.com/kyle-ssg/nextjs-redux)!

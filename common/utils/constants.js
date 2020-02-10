const Constants = global.Constants = {
    events: {
        'LOGIN': { 'event': 'User login', 'category': 'User' },
        'REGISTER': { 'event': 'User register', 'category': 'User' },
    },
    defaultLocale: 'en',
    simulate: {
        FORCE_LANGUAGE: false, // set to "en" etc to specify a language
    },
    // <title>
    titles: {
        home: 'Solid State Group', // Used by default on all pages
        blog: 'Blog | Solid State Group',
        work: 'Work | Solid State Group',
        partners: 'Partners | Solid State Group',
        jobs: 'Jobs | Solid State Group',
        services: 'Services | Solid State Group',
        contact: 'Contact | Solid State Group',
    },
    // meta:description
    descriptions: {
        // Used by default
        home: 'At Solid State Group, we help design and build new digital products, drag legacy technology up to date, and make all your systems work together.',
    },
    // meta:description
    keywords: {
        // Used by default
        home: 'Api development, custom, iot, bespoke, software development, mobile application development, user interface design, ux design, react native, systems integration, cloud infrastructure, technology, digital',
    },
    pages: {

    },
};

export default Constants;

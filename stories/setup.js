import React from 'react';
import { withInfo } from '@storybook/addon-info/dist/index'; // eslint-disable-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs'; // eslint-disable-line import/no-extraneous-dependencies
import '../styles/styles.scss';
import '../project/polyfill';

const isTest = process.env.TEST;

export const withContainer = story => (
    <div className="container">
        { story() }
    </div>
);

export const withPaddedContainer = story => (
    <div style={{ paddingTop: 50 }} className="container">
        { story() }
    </div>
);

export const getStory = (name) => {
    let res = storiesOf(name, module);

    if (!isTest) {
        // jest can't parse this module so we only add it when needed
        res = res.addDecorator(require('storybook-addon-smart-knobs').withSmartKnobs); // eslint-disable-line import/no-extraneous-dependencies
    }

    return res
        .addDecorator(withKnobs)
        .addDecorator(withInfo);
};

import React from 'react';
import { getStory, withPaddedContainer } from './setup';
import Button, { ButtonTertiary, ButtonPrimary, ButtonSecondary } from '../components/base/forms/Button';
import BlogItem from '../components/BlogItem';
import BlogPost from '../components/BlogPost';
import exampleMD from './example-blog-post';

getStory('Buttons')
    .addDecorator(withPaddedContainer)
    .add('default', () => <Button>A Button</Button>)
    .add('primary', () => <ButtonPrimary>A Button</ButtonPrimary>)
    .add('secondary', () => <ButtonSecondary>A Button</ButtonSecondary>)
    .add('tertiary', () => <ButtonTertiary>A Button</ButtonTertiary>);

getStory('Blog')
    .addDecorator(withPaddedContainer)
    .add('Blog Item', () => (
        <BlogItem item={{
            'author': 'Kyle',
            'title': 'Achieving a perfect 100% Google Lighthouse audit score with Next and Redux',
            'description': 'Jumping down a satisfying rabbit hole with NextJS',
            'tags': [
                'javascript',
                'react',
                'showdev',
                'webdev',
            ],
            'dateFormatted': 'Aug 26 2019',
            'sort': -1566774000000,
            'url': '100-percent-lighthouse-score',
        }}
        />
    ))
    .add('Blog Post', () => (
        <BlogPost
          route="Test Blog" source={exampleMD}
        />
    ));

import React, { Component } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const Page = class extends Component {
  static displayName= 'Page';

  static propTypes = {
      title: propTypes.string.isRequired,
      canonical: propTypes.string,
      children: propTypes.node.isRequired,
  }

  render() {
      return (
      <>
          <Head>
              {this.props.title && (
              <title>
                  {this.props.title}
              </title>
              )}
              <link rel="canonical" href={`${Project.canonicalUrl}/${this.props.canonical}`} />
          </Head>
          {this.props.children}
      </>
      );
  }
};

export default Page;

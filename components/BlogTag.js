// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

export default class TheComponent extends Component {
  static displayName = 'BlogPost';

  static propTypes = {
      tag: propTypes.string.isRequired,
  };

  render() {
      return (
          <Link href={`/blog?tag=${encodeURIComponent(this.props.tag)}`}>
              <span className={`blog-tag ${this.props.tag.replace(/ /g, '_').toLowerCase()}`}>{this.props.tag}</span>
          </Link>
      );
  }
}

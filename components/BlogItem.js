import React, { Component } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import BlogTag from './BlogTag';


// {
//   description: propTypes.string,
//   title: propTypes.string,
//   dateFormatted: propTypes.string,
//   tags: propTypes.array,
//   url: propTypes.string,
// }
const _propTypes = {
    item: propTypes.object,
};


const BlogItem = class extends Component {
  static displayName = 'BlogItem';

  static propTypes = _propTypes;

  shouldComponentUpdate() {
      return false;
  }

  render() {
      const {
          props: {
              item: {
                  description,
                  title,
                  dateFormatted,
                  author,
                  tags,
                  url,
              },
          },
      } = this;
      return (
          <Link prefetch={false} href={`/blog/${url}`}>
              <div className="blog-item clickable">
                  <div className="blog-item-content">
                      <h2>
                          {title}
                      </h2>
                      <p>
                          {description}
                      </p>
                      <div className="date">
                          {`Published: ${dateFormatted} By ${author}`}
                      </div>
                      <div className="tags mt-2">
                          {tags.map(t => (
                              <BlogTag key={t} tag={t}/>
                          ))}
                      </div>
                  </div>
              </div>
          </Link>
      );
  }
};

export default BlogItem;

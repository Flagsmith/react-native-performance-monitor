import React, { Component } from 'react';
import Link from 'next/link';
import filter from 'lodash/filter';
import propTypes from 'prop-types';
import BlogTag from '../../components/BlogTag';
import blog from '../../static/blog.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Page from '../../components/Page';
import BlogItem from '../../components/BlogItem';

const BlogPage = class extends Component {
  static displayName = 'BlogPage'

  static propTypes = {
      router: propTypes.object,
  };

  constructor(props, context) {
      super(props, context);
      this.state = {
          filter: 'javascript',
      };
  }

  componentWillMount() {
      API.trackPage(Constants.pages.BLOG);
  }

  getBlog = () => {
      if (!this.props.router.query.tag) {
          return blog;
      }
      return filter(blog, (item) => {
          return item.tags.includes(this.props.router.query.tag);
      });
  }

  render() {
      const blogItems = this.getBlog();
      const filteredBy = this.props.router.query.tag;
      return (
          <Page title={Constants.titles.blog} canonical="blog">
              <Header/>
              <div className="blog">
                  <div className="container mt-5">
                      {!!filteredBy && (
                      <div className="mb-3 text-center">
                          Filtering by <BlogTag tag={filteredBy}/>
                          {' '}
                          <Link href="/blog">
                              <a href="/blog">
                                View all
                              </a>
                          </Link>
                      </div>
                      )}
                      {blogItems.map(b => (
                          <BlogItem key={b.title} item={b}/>
                      ))}
                  </div>
              </div>
              <Footer/>
          </Page>
      );
  }
};

BlogPage.propTypes = {};

export default BlogPage;

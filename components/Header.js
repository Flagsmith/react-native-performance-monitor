import React, { Children, PureComponent } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import propTypes from 'prop-types';


const ActiveLink = withRouter(({ router, children, ...props }) => (
    <Link {...props}>
        {React.cloneElement(Children.only(children), {
            className:
        `/${router.pathname.split('/')[1]}` === props.href ? `${children.props.className} active` : children.props.className,
        })}
    </Link>
));

class Header extends PureComponent {
  static displayName = 'Header';

  static propTypes = {
      className: propTypes.string,
  };

  constructor(props) {
      super(props);
      this.state = {};
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
      return (
          <div className={`navbar-container ${this.props.className || ''}`}>
              <div className="container">
                  <nav style={{ flex: 1 }} className={`navbar navbar-expand-lg ${this.state.menuOpen ? 'nav-open' : ''}`}>
                      <Link
                        href="/"
                      >
                          <a className="nav-link navbar-brand">
                            Home
                          </a>
                      </Link>
                      <div style={{ flex: 1 }} className="navbar" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/services"><a className="nav-link">Services</a></ActiveLink>
                              </li>
                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/work"><a className="nav-link">Work</a></ActiveLink>
                              </li>
                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/partners"><a className="nav-link">Partners</a></ActiveLink>
                              </li>
                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/jobs"><a className="nav-link">Jobs</a></ActiveLink>
                              </li>
                          </ul>
                          <ul className="navbar-nav">

                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/blog"><a className="nav-link">Blog</a></ActiveLink>
                              </li>
                              <li className="nav-item d-sm-block">
                                  <ActiveLink prefetch={false} href="/contact"><a className="nav-link">Contact</a></ActiveLink>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      );
  }
}

export default withRouter(Header);

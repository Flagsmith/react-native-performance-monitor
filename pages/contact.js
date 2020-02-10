import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const HomePage = class extends React.Component {
  static displayName = 'HomePage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.contact} canonical="contact">
              <Header/>
              <h1>Contact</h1>
              <Footer/>
          </Page>
      );
  };
};

export default HomePage;

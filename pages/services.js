import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const ServicesPage = class extends React.Component {
  static displayName = 'ServicesPage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.services} canonical="services">
              <Header/>
              <h1>Services</h1>
              <Footer/>
          </Page>
      );
  };
};

export default ServicesPage;

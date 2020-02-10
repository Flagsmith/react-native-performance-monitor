import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const PartnersPage = class extends React.Component {
  static displayName = 'PartnersPage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.partners} canonical="partners">
              <Header/>
              <h1>Partners</h1>
              <Footer/>
          </Page>
      );
  };
};

export default PartnersPage;

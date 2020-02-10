import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const JobsPage = class extends React.Component {
  static displayName = 'HomePage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.jobs} canonical="jobs">
              <Header/>
              <h1>Jobs</h1>
              <Footer/>
          </Page>
      );
  };
};

export default JobsPage;

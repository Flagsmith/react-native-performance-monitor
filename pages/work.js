import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';

const WorkPage = class extends React.Component {
  static displayName = 'WorkPage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return (
          <Page title={Constants.titles.work} canonical="work">
              <Header/>
              <h1>Work</h1>
              <Footer/>
          </Page>
      );
  };
};

export default WorkPage;

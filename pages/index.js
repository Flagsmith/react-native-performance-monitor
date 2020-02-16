import '../styles/styles.scss';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// This component depends on the client-only PDF library
const App = dynamic(import('../components/App'), { ssr: false });

const HomePage = class extends React.Component {
  static displayName = 'HomePage';

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  render = () => {
      return <>
          <Head>
              <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
          </Head>
          {App ? (
              <App/>
          ) : <div/>}
    </>;
  };
};

export default HomePage;

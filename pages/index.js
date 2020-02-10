import '../styles/styles.scss';
import React from 'react';

import dynamic from 'next/dynamic';
// This component depends on the client-only PDF library
const Chart = dynamic(import('../components/Chart'), { ssr: false });

const HomePage = class extends React.Component {
    static displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render = () => {
        return Chart ? (
            <Chart/>
        ) : <div></div>;
    }
};

export default HomePage;

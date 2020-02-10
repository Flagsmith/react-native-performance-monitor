import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.overlappedcolumn2d';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts/lib/ReactFC';
import _ from 'lodash';
import io from 'socket.io-client';

ReactFC.fcRoot(FusionCharts, Charts, TimeSeries, FusionTheme);

const defaultState = {
    dataSource: {
        chart: {
            caption: 'React Native Render Times',
            subcaption: 'Performance experiments',
            yaxisname: 'Render time (ms)',
            drawcrossline: '1',
            theme: 'fusion',
            showvalues: '0',
        },
        categories: [
            { category: [

            ] },
        ],
        dataset: [
        ],
    },
};
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ..._.cloneDeep(defaultState),
            type: 'msline',
        };
    }

    componentDidMount() {
        const socket = io.connect('http://localhost:3000');
        socket.on('data', (fetchedData) => {
            this.addItem(fetchedData);
        });
    }

    addItem = (value = Math.random()) => {
        if (!this.state.dataSource.dataset.length) {
            this.addSeries();
        }
        if (this.state.dataSource.categories[0].category.length === this.state.dataSource.dataset[this.state.dataSource.dataset.length - 1].data.length) {
            this.addCategory();
        }
        this.state.dataSource.dataset[this.state.dataSource.dataset.length - 1].data.push({
            value,
        });
        this.forceUpdate();
    }

    addCategory = () => {
        this.state.dataSource.categories[0].category.push({
            label: `Test${this.state.dataSource.categories[0].category.length + 1}`,
        });
    }

    addSeries = () => {
        this.state.dataSource.dataset.push({
            seriesname: `Variant ${this.state.dataSource.dataset.length + 1}`,
            data: [],
        });
        this.forceUpdate();
    }

    clear = () => {
        this.setState(_.cloneDeep(defaultState));
    }

    toggleType = () => {
        if (this.state.type === 'msline') {
            this.setState({ type: 'overlappedcolumn2d' });
        } else {
            this.setState({ type: 'msline' });
        }
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <div style={{ flex: 1 }}>
                    <ReactFC
                      type={this.state.type}
                      width="100%"
                      height="90%"
                      dataFormat="json"
                      dataSource={this.state.dataSource}
                    />
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-primary mr-2" onClick={this.toggleType}>Toggle graph type</button>
                    <button className="btn btn-primary mr-2" onClick={this.addSeries}>Add Variant</button>
                    <button className="btn btn-danger" onClick={this.clear}>Clear</button>
                </div>
            </div>
        );
    }
}

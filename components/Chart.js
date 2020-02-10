import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.overlappedcolumn2d';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts/lib/ReactFC';
import _ from 'lodash';
import io from 'socket.io-client';

ReactFC.fcRoot(FusionCharts, Charts, TimeSeries, FusionTheme);
const colors = [
    '#5d62b5', '#29c3be', '#f2726f',
    '#4fb54f', '#c3bf39', '#f26394',
    '#5d62b5', '#29c3be', '#f2726f',
    '#4fb54f', '#c3bf39', '#f26394',
    '#5d62b5', '#29c3be', '#f2726f',
    '#4fb54f', '#c3bf39', '#f26394',
    '#5d62b5', '#29c3be', '#f2726f',
    '#4fb54f', '#c3bf39', '#f26394',
];
const defaultState = {
    dataSource: {
        chart: {
            caption: 'React Native Render Times',
            subcaption: 'Performance experiments',
            yaxisname: 'Render time (ms)',
            drawcrossline: '1',
            theme: 'fusion',
            showvalues: '0',
            'palettecolors': colors.map(c => c.replace('#', '')).join(','),
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
        const averages = [];
        _.each(this.state.dataSource.dataset, (dataSet) => {
            let total = 0;
            _.each(dataSet.data, (item) => {
                total += item.value;
            });
            averages.push(total / dataSet.data.length);
        });
        this.state.dataSource.trendlines = averages.map((v, i) => {
            return {
                'line': [{
                    'color': colors[i],
                    'thickness': '4',
                    startValue: v,
                    'alpha': '50',
                }],
            };
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
                    <button className="btn btn-primary mr-2" onClick={this.addSeries}>Add Variant</button>
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-secondary mr-2" onClick={this.toggleType}>Toggle graph type</button>
                    <button className="btn btn-danger" onClick={this.clear}>Clear</button>
                </div>
            </div>
        );
    }
}

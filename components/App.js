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
            type: 'overlappedcolumn2d',
        };
    }

    componentDidMount() {
        const socket = io.connect('http://localhost:3000');
        socket.on('data', (fetchedData) => {
            if (!this.state.paused) {
                this.addItem(fetchedData);
            }
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
        }).concat([{
            line: [{
                'color': '#ff0000',
                'thickness': '2',
                startValue: 16.67,
                'alpha': '100',
            }],
        }]);
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

    toggle= () => this.setState({ hideMenu: !this.state.hideMenu })

    pauseResume= () => this.setState({ paused: !this.state.paused })

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={`control-panel${this.state.hideMenu ? ' hidden' : ''}`}>
                        <div style={{ flex: 1 }}>
                            <div className="text-center mt-2">
                                <button type="button" className="btn btn-primary mr-2" onClick={this.addSeries}>Add Variant</button>
                            </div>
                            <div className="text-center mt-2">
                                <button type="button" className="btn btn-primary" onClick={this.pauseResume}>
                                    {this.state.paused ? 'Resume' : 'Pause'}
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-2 mb-2">
                            <button type="button" className="btn btn-danger" onClick={this.clear}>Clear Tests</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="nav">
                            <a onClick={this.toggle}>
                                <img height={34} src="/static/menu.svg"/>
                            </a>
                        </div>
                        <div className="content-inner">
                            <ReactFC
                              type={this.state.type}
                              width="100%"
                              height="85%"
                              dataFormat="json"
                              dataSource={this.state.dataSource}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

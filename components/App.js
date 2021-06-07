import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.overlappedcolumn2d';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts/lib/ReactFC';
import _ from 'lodash';
import parseInput from './parse-input';
import Row from './Row';

document.addEventListener('click', function(e) {
  if (document.activeElement.toString() == '[object HTMLButtonElement]') {
    document.activeElement.blur();
  }
});


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

function ConvertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ','

      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return str;
}

const toCSV = function(state) {
  const datas =  state.dataSource.dataset;
  let maxNum = 0;
  let maxIndex = -1;

  let arr = [];
  let rootObj = {};

  _.each(datas,(d, i)=>{
    rootObj[i] = d.seriesname;
    if (d.data.length > maxNum) {
      maxNum = d.data.length;
      maxIndex = i;
     }
  })
  if (maxIndex === -1) return
  arr.push(rootObj)
  _.each(datas[maxIndex].data, (v, i)=>{ // row
    let obj = {};
    _.each(datas,(data)=>{ // column
      obj[data.seriesname] = data.data[i] && data.data[i].value || "";
    })
    arr.push(obj);
  })
  const csv = "data:text/csv;charset=utf-8," + ConvertToCSV(arr);
  var encodedUri = encodeURI(csv);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "performance_tests.csv");
  document.body.appendChild(link); // Required for FF
  link.click(); // This will download the data file named "my_data.csv".
}

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
      {
        category: [],
      },
    ],
    dataset: [
      {
        seriesname: 'Baseline test',
        data: [],
      },
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
    this.socket = new WebSocket('ws://localhost:8126');
    this.socket.onopen = function(event) {
      console.log('Connected');
    };

    this.socket.onmessage = (event) => {
      try {
        if (!this.state.paused) {
          this.addItem(JSON.parse(event.data).value);
        }
      } catch (e) {
      }
    };
  }

  sendRemount = () => {
    this.socket.send('remount');
  };

  sendForceUpdate = () => {
    this.socket.send('forceUpdate');
  };

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
      let avg = total / dataSet.data.length;
      if (isNaN(avg)) {
        avg = 0;
      }
      averages.push(avg);
    });
    this.state.averages = averages;
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
  };

  addCategory = () => {
    this.state.dataSource.categories[0].category.push({
      label: `Test${this.state.dataSource.categories[0].category.length + 1}`,
    });
  };

  addSeries = () => {
    this.state.dataSource.dataset.push({
      seriesname: `Variant ${this.state.dataSource.dataset.length + 1}`,
      data: [],
    });
    this.forceUpdate();
  };

  setVariantName = (i, e) => {
    this.state.dataSource.dataset[i].seriesname = parseInput(e);
    this.forceUpdate();
  };

  removeSeries = (i) => {
    this.state.dataSource.dataset.splice(i, 1);
    this.forceUpdate();
  };

  clear = () => {
    this.setState(_.cloneDeep(defaultState));
  };

  toggle = () => this.setState({ hideMenu: !this.state.hideMenu });

  pauseResume = () => this.setState({ paused: !this.state.paused });


  repeat = (cb, times) => {
    const rep = function(e, currentTimes = 0) {
      if (currentTimes < times) {
        cb();
        setTimeout(() => {
          rep(null, currentTimes + 1);
        }, 200);
      }
    };
    return rep;
  };

  download = () => {
    toCSV(this.state);
  }

  render() {
    const datasets = this.state.dataSource.dataset;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={`control-panel${this.state.hideMenu ? ' hidden' : ''}`}>
            <div style={{ flex: 1 }}>
              {datasets && datasets.map((d, i) => (
                <div>
                <Row key={i} className="experiment-row">
                  <input
                    key={i} onChange={e => this.setVariantName(i, e)} type="text"
                    value={d.seriesname}
                  />
                  <span style={{color:'white', width:80, display:"inline-block"}} className="text-center">
                    {(this.state.averages && this.state.averages[i] ? `~${this.state.averages[i]}ms` : "-")}
                  </span>
                  <button onClick={() => this.removeSeries(i)} type="button" className="btn btn-default">
                    <img width={20} src="/static/close.svg"/>
                  </button>
                </Row>
                </div>
              ))}
              <div className="text-center mt-2">
                <button type="button" className="btn btn-primary mr-2" onClick={this.addSeries}>
                  Add Experiment
                </button>
              </div>
              <div className="text-center mt-2">
                <button type="button" className="btn btn-primary" onClick={this.pauseResume}>
                  {this.state.paused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>
            <div className="text-center mt-2 mb-2">
              <button
                style={{ width: 140 }} type="button" className="btn mr-4 btn-primary"
                onClick={this.sendRemount}
              >Remount
              </button>
              <button
                style={{ width: 70 }} type="button" className="btn mr-2 btn-secondary"
                onClick={this.repeat(this.sendRemount, 5)}
              >x5
              </button>
              <button
                style={{ width: 70 }} type="button" className="btn btn-secondary"
                onClick={this.repeat(this.sendRemount, 10)}
              >x10
              </button>
            </div>
            <div className="text-center mt-2 mb-2">
              <button
                style={{ width: 140 }} type="button" className="btn mr-4 btn-primary"
                onClick={this.sendRemount}
              >Force Update
              </button>
              <button
                style={{ width: 70 }} type="button" className="btn mr-2 btn-secondary"
                onClick={this.repeat(this.sendForceUpdate, 5)}
              >x5
              </button>
              <button
                style={{ width: 70 }} type="button" className="btn btn-secondary"
                onClick={this.repeat(this.sendForceUpdate, 10)}
              >x10
              </button>
            </div>
            <div className="text-center mb-2 mt-4">
              <button type="button" className="btn btn-primary" onClick={this.download}>Download</button>
            </div>
            <div className="text-center mb-2 mt-4">
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

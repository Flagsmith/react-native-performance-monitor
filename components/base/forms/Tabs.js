/**
 * Created by kylejohnson on 30/07/2016.
 */
import { isMobile } from 'react-device-detect';
import Button from './Button';

const _isMobile = isMobile;

const Tabs = class extends React.Component {
  static displayName = 'Tabs'

  static propTypes = {
      value: propTypes.any,
      onChange: propTypes.func.isRequired,
      children: propTypes.node,
      className: propTypes.string,
  }

  render() {
      return (
          <div className={`tabs ${this.props.className || ''}`}>
              <div className="tabs-nav" style={_isMobile ? { flexWrap: 'wrap' } : {}}>
                  {this.props.children.map((child, i) => {
                      const isSelected = this.props.value === i;
                      return (
                          <Button
                            data-test={child.props['data-test']}
                            id={child.props.id}
                            key={`button${i}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                this.props.onChange(i);
                            }}
                            className={`btn-tab btn-primary${isSelected ? ' tab-active' : ''}`}
                          >
                              {child.props.tabLabel}
                          </Button>
                      );
                  })}
              </div>
              <div
                className="tab-line" style={{
                    width: `${100 / this.props.children.length}%`,
                    left: `${100 / this.props.children.length * this.props.value}%`,
                }}
              />
              <div className="tabs-content">
                  {this.props.children.map((child, i) => {
                      const isSelected = this.props.value === i;
                      return (
                          <div key={`content${i}`} className={`tab-item${isSelected ? ' tab-active' : ''}`}>
                              {child}
                          </div>
                      );
                  })}
              </div>
          </div>
      );
  }
};

Tabs.defaultProps = {
    className: '',
    value: 0,
};

Tabs.propTypes = {};

export default Tabs;

// Example Usage
//   <Tabs value={this.state.tab} onChange={this.selectTab}>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 1 content</h2>
//     </TabItem>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 2 content</h2>
//     </TabItem>
//   </Tabs>

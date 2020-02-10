/**
 * Created by kylejohnson on 25/07/2016.
 */
import React, { Component } from 'react';

const InputGroup = class extends Component {
    static displayName = 'InputGroup'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    focus = () => {
        this.input.focus();
    };

    render() {
        const { props } = this;
        const id = props.inputProps.id || props.inputProps.name || Utils.GUID();
        const { inputProps } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={id} className="cols-sm-2 control-label">{props.title}</label>
                {inputProps && inputProps.error && (
                <span>
                    <span> - </span>
                    <span id={props.inputProps.name ? `${props.inputProps.name}-error` : ''} className="text-danger">
                        {inputProps.error}
                    </span>
                </span>
                )}

                <div>
                    <div>
                        {
                          this.props.textarea ? (
                              <textarea
                                ref={c => this.input = c} {...props.inputProps} isValid={props.isValid}
                                disabled={props.disabled}
                                value={props.value}
                                data-test={props['data-test']}
                                onChange={props.onChange} type={props.type || 'text'} id={id}
                                placeholder={props.placeholder}
                              />
                          ) : (
                              <Input
                                ref={c => this.input = c} {...props.inputProps} isValid={props.isValid}
                                disabled={props.disabled}
                                value={props.value}
                                data-test={props['data-test']}
                                onChange={props.onChange} type={props.type || 'text'} id={id}
                                placeholder={props.placeholder}
                              />
                          )
                      }

                    </div>
                </div>
            </div>
        );
    }
};
global.InputGroup = InputGroup;
export default InputGroup;

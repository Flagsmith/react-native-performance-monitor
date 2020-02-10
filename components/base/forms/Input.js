/**
 * Created by kylejohnson on 30/07/2016.
 */
import cn from 'classnames';

const Input = class extends React.Component {
    static displayName = 'Input'

    constructor(props, context) {
        super(props, context);
        this.state = { shouldValidate: false };
    }

    onFocus = (e) => {
        this.setState({
            isFocused: true,
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.onFocus && this.props.onFocus(e);
    }

    focus = () => {
        this.input.focus();
    }

    onKeyDown = (e) => {
        if (Utils.keys.isEscape(e)) {
            this.input.blur();
        }
        // eslint-disable-next-line no-unused-expressions
        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    validate = () => {
        this.setState({
            shouldValidate: true,
        });
    }

    onBlur = (e) => {
        this.setState({
            shouldValidate: true,
            isFocused: false,
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.onBlur && this.props.onBlur(e);
    }

    render() {
        const { isValid, onSearchChange, placeholderChar, ...rest } = this.props;

        const className = cn({
            'input-container': true,
            'focused': this.state.isFocused,
            'invalid': this.state.shouldValidate && !isValid,
        }, this.props.className);

        const inputClassName = cn({
            input: true,
        }, this.props.inputClassName);

        return (
            <div
              className={className}
            >
                <input
                  ref={c => this.input = c}
                  {...rest} onFocus={this.onFocus}
                  onKeyDown={this.onKeyDown}
                  onBlur={this.onBlur}
                  value={this.props.value}
                  className={inputClassName}
                />
            </div>
        );
    }
};

Input.defaultProps = {
    className: '',
    placeholderChar: ' ',
    isValid: true,
};
global.Input = Input;
export default Input;

import propTypes from 'prop-types';

const Footer = class extends React.Component {
    static displayName = 'Footer';

    static propTypes = {
        className: propTypes.string,
    }

    componentDidMount() {
    }

    render() {
        const { className } = this.props;
        return (
            <footer className={`${className} clearfix`}>
              Footer
            </footer>
        );
    }
};

export default Footer;

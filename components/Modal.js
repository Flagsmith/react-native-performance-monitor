import _ModalHeader from 'reactstrap/lib/ModalHeader';
import _ModalBody from 'reactstrap/lib/ModalBody';
import _Modal from 'reactstrap/lib/Modal';
import _ModalFooter from 'reactstrap/lib/ModalFooter';
import React from 'react';
import ReactDOM from 'react-dom';

import Confirm from './ModalConfirm';
import ModalDefault from './ModalDefault';
import Alert from './ModalAlert';

export const ModalHeader = _ModalHeader;
export const ModalFooter = _ModalFooter;
export const Modal = _Modal;
export const ModalBody = _ModalBody;


const withModal = (WrappedComponent) => {
    class HOC extends React.Component {
        static displayName = 'withFoo';

        constructor(props) {
            super(props);
            this.state = {
                isOpen: true,
            };
            global.closeModal = this.toggle;
        }

        toggle = () => {
            this.setState({ isOpen: false });
        }

        render() {
            return (
                <WrappedComponent
                  toggle={this.toggle}
                  {...this.props}
                  {...this.state}
                />
            );
        }
    }

    return HOC;
};

const _Confirm = withModal(Confirm);
const _Alert = withModal(Alert);
const _ModalDefault = withModal(ModalDefault);

export const openAlert = global.openAlert = (title, children, onDismiss) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('alert'));
    ReactDOM.render((
        <_Alert
          title={title}
          onDismiss={onDismiss}
        >
            {children}
        </_Alert>
    ),
    document.getElementById('alert'));
};

export const openConfirm = global.openConfirm = (title, body, onYes, onNo) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('confirm'));
    ReactDOM.render((
        <_Confirm
          isOpen
          onNo={onNo}
          onYes={onYes}
          title={title}
        >
            {body}
        </_Confirm>
    ),
    document.getElementById('confirm'));
};

export const openModal = global.openModal = (title, body) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('confirm'));
    ReactDOM.render((
        <_ModalDefault
          isOpen
          title={title}
        >
            {body}
        </_ModalDefault>
    ),
    document.getElementById('modal'));
};

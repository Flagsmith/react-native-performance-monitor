import propTypes from 'prop-types';
import React from 'react';

import { Modal, ModalBody, ModalHeader } from './Modal';

const ModalDefault = (props) => {
    const onDismiss = () => {
        if (props.onDismiss) {
            props.onDismiss();
        }
        props.toggle();
    };
    return (
        <Modal
          unmountOnClose
          isOpen={props.isOpen}
          toggle={onDismiss}
        >
            <ModalHeader toggle={onDismiss}>
                {props.title}
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
        </Modal>
    );
};

ModalDefault.propTypes = {
    children: propTypes.node,
    title: propTypes.node,
    isOpen: propTypes.bool,
    onDismiss: propTypes.func,
    toggle: propTypes.func,
};

export default ModalDefault;

import propTypes from 'prop-types';
import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';

const Confirm = (props) => {
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
            <ModalFooter>
                <Button
                  color="primary" onClick={onDismiss}
                >
                    Ok
                </Button>
            </ModalFooter>
        </Modal>
    );
};

Confirm.propTypes = {
    children: propTypes.node,
    title: propTypes.node,
    isOpen: propTypes.bool,
    onDismiss: propTypes.func,
    toggle: propTypes.func,
};

export default Confirm;

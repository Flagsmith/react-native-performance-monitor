import propTypes from 'prop-types';
import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';

const Confirm = (props) => {
    const no = () => {
        if (props.onNo) {
            props.onNo();
        }
        props.toggle();
    };
    const yes = () => {
        if (props.onYes) {
            props.onYes();
        }
        props.toggle();
    };
    return (
        <Modal
          unmountOnClose
          isOpen={props.isOpen}
          toggle={no}
        >
            <ModalHeader toggle={no}>
                {props.title}
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button
                  color="primary" onClick={yes}
                >
                    Ok
                </Button>
                {' '}
                <Button
                  color="secondary" onClick={no}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

Confirm.propTypes = {
    children: propTypes.node,
    title: propTypes.node,
    isOpen: propTypes.bool,
    onYes: propTypes.func,
    onNo: propTypes.func,
    toggle: propTypes.func,
};

export default Confirm;

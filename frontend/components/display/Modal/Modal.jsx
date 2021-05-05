import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'frontend/components/typography/Icon';
import {
    ModalOverlay,
    ModalContainer,
    CloseButton,
} from './Modal.styled';

const SIZE = ['l', 'm', 's'];

const Modal = ({
    className,
    children,
    closeOnOutsideClick,
    displayCloseButton,
    onClose,
    open,
    size,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Modal';

    return (
        <ModalOverlay
            className={`${BASE_CLASS_NAME}__overlay`}
            open={open}
            onClick={() => { if (closeOnOutsideClick) onClose(); }}
        >
            <ModalContainer
                className={`${BASE_CLASS_NAME} ${className}`.trim()}
                open={open}
                size={size}
                onClick={(e) => e.stopPropagation()}
                {...styleProps}
            >
                {children}
                {displayCloseButton && (
                    <CloseButton onClick={onClose} variation="tertiary" size="icon">
                        <Icon icon="X" />
                    </CloseButton>
                )}
            </ModalContainer>
        </ModalOverlay>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    closeOnOutsideClick: PropTypes.bool,
    displayCloseButton: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    size: PropTypes.oneOf(SIZE),
};

Modal.defaultProps = {
    className: '',
    children: null,
    closeOnOutsideClick: true,
    displayCloseButton: true,
    open: false,
    size: 'm',
};

export default Modal;

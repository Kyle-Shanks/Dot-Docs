import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex';
import Button from 'frontend/components/input/Button';
import Header from 'frontend/components/typography/Header';
import Text from 'frontend/components/typography/Text';
import { DialogOverlay, DialogContainer, DialogSection } from './Dialog.styled';

const Dialog = ({
    className,
    confirmLabel,
    message,
    header,
    onConfirm,
    onClose,
    open,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Dialog';

    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <DialogOverlay
            className={`${BASE_CLASS_NAME}__overlay`}
            open={open}
            onClick={onClose}
        >
            <DialogContainer
                className={`${BASE_CLASS_NAME} ${className}`.trim()}
                open={open}
                onClick={(e) => e.stopPropagation()}
                {...styleProps}
            >
                <DialogSection>
                    <Header tag="h4">{header}</Header>
                </DialogSection>
                <DialogSection>
                    <Text align="center">{message}</Text>
                </DialogSection>
                <DialogSection>
                    <Flex justify="flex-end" hGap={"0.5rem"}>
                        <Button variation="secondary" onClick={onClose}>Cancel</Button>
                        <Button onClick={handleConfirm}>{confirmLabel}</Button>
                    </Flex>
                </DialogSection>
            </DialogContainer>
        </DialogOverlay>
    );
};

Dialog.propTypes = {
    className: PropTypes.string,
    confirmLabel: PropTypes.string,
    message: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
};

Dialog.defaultProps = {
    className: '',
    confirmLabel: 'Confirm',
    open: false,
};

export default Dialog;

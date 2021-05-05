import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex';
import { StyledComponent, Label } from './Button.styled';

const SIZE = ['l', 'm', 's', 'icon'];
const VARIATION = ['primary', 'secondary', 'tertiary'];

const Button = ({
    className,
    children,
    disabled,
    iconLeft,
    iconRight,
    loading,
    loadingText,
    onClick,
    variation,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Button';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="button"
            disabled={disabled}
            onClick={onClick}
            variation={variation}
            {...styleProps}
        >
            <Flex justify="center" align="center">
                {!loading && iconLeft}
                <Label variation={variation}>{loading ? loadingText : children}</Label>
                {!loading && iconRight}
            </Flex>
        </StyledComponent>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    loading: PropTypes.bool,
    onClick: PropTypes.func,

    // Style props
    size: PropTypes.oneOf(SIZE),
    variation: PropTypes.oneOf(VARIATION),
};

Button.defaultProps = {
    className: '',
    children: null,
    disabled: false,
    iconLeft: null,
    iconRight: null,
    loading: false,
    loadingText: 'loading...',
    onClick: () => {},

    // Style Props
    size: 'm',
    variation: 'primary',
};

export default Button;
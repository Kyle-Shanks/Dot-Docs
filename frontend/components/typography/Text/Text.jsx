import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Text.styled';

const ALIGN = ['left', 'center', 'right', 'justify'];
const VARIATION = ['primary', 'secondary'];

const Text = ({ children, className, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Text';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="p"
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    // Style Props
    align: PropTypes.oneOf(ALIGN),
    truncate: PropTypes.bool,
    variation: PropTypes.oneOf(VARIATION),
};

Text.defaultProps = {
    children: null,
    className: '',

    // Style Props
    align: 'left',
    truncate: false,
    variation: 'primary',
};

export default Text;

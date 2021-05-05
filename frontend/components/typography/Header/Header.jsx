import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Header.styled';

const ALIGN = ['left', 'center', 'right'];
const TAG = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Header = ({ children, className, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Header';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Header.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOf(TAG),

    // Style Props
    align: PropTypes.oneOf(ALIGN),
    truncate: PropTypes.bool,
};

Header.defaultProps = {
    children: null,
    className: '',
    tag: 'h1',

    // Style Props
    align: 'left',
    truncate: false,
};

export default Header;

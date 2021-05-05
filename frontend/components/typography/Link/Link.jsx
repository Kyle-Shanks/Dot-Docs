import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Link.styled';

const Link = ({ className, children, href, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Link';

    return (
        <StyledComponent
            tag="a"
            href={href}
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
};

Link.defaultProps = {
    className: '',
    children: null,
    href: '',
};

export default Link;

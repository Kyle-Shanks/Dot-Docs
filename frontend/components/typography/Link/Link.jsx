import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { StyledComponent } from './Link.styled';

const BASE_CLASS_NAME = 'Link';

const Link = ({ className, children, href, path, ...styleProps }) => {
    const history = useHistory();
    const { pathname } = history.location;

    const handleClick = (e) => {
        if (path && path !== pathname) {
            e.preventDefault();
            history.push(path);
        }
    };

    return (
        <StyledComponent
            tag="a"
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            href={href}
            onClick={handleClick}
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
    path: PropTypes.string,
};

Link.defaultProps = {
    className: '',
    children: null,
    href: '',
    path: '',
};

export default Link;

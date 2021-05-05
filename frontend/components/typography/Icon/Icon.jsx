import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'frontend/icons';
import { StyledComponent } from './Icon.styled';

const SIZE = ['xl', 'l', 'm', 's'];

const Icon = ({ className, children, icon, size, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Icon';
    const fallbackIcon = Icons.CircleHelp;
    const renderedIcon = icon ? Icons[icon] : children;

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            size={size}
            {...styleProps}
        >
            {renderedIcon || fallbackIcon}
        </StyledComponent>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
    size: PropTypes.oneOf(SIZE),
};

Icon.defaultProps = {
    className: '',
    children: null,
    icon: '',
    size: 'm',
};

export default Icon;
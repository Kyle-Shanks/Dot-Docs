import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Card.styled';

const Card = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Card';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

Card.defaultProps = {
    className: '',
    children: null,
};

export default Card;

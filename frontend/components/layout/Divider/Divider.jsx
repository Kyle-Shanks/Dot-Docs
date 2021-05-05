import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Divider.styled';

const Divider = ({ className, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Divider';

    return (
        <StyledComponent
            tag="hr"
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        />
    );
};

Divider.propTypes = {
    className: PropTypes.string,
};

Divider.defaultProps = {
    className: '',
};

export default Divider;

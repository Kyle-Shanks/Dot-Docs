import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './SimpleGrid.styled';

const SimpleGrid = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'SimpleGrid';

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {children}
        </StyledComponent>
    );
};

SimpleGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    // Style Props
    align: PropTypes.string,
    columns: PropTypes.number,
    gap: PropTypes.string,
    justify: PropTypes.string,
    rows: PropTypes.number,
};

SimpleGrid.defaultProps = {
    children: null,
    className: '',

    // Style Props
    align: 'normal',
    columns: 1,
    gap: '0rem',
    justify: 'normal',
    rows: 1,
};

export default SimpleGrid;
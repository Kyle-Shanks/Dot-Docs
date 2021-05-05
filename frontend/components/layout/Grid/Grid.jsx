import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Grid.styled';

const Grid = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Grid';

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {children}
        </StyledComponent>
    );
};

Grid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    // Style Props
    align: PropTypes.string,
    areas: PropTypes.string,
    columns: PropTypes.string,
    gap: PropTypes.string,
    justify: PropTypes.string,
    rows: PropTypes.string,
    template: PropTypes.string,
};

Grid.defaultProps = {
    children: null,
    className: '',

    // Style Props
    align: 'normal',
    areas: '',
    columns: '',
    gap: '0rem',
    justify: 'normal',
    rows: '',
    template: '',
};

export default Grid;
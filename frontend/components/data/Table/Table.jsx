import React from 'react';
import PropTypes from 'prop-types';
import Box from 'frontend/components/layout/Box';
import {
    StyledComponent,
    StyledOuter,
    StyledFoot,
    StyledBody,
    StyledCell,
    StyledHeadCell,
} from './Table.styled';

const SIZE = ['l', 'm', 's'];

const Table = ({ className, children, size, wide, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Table';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="table"
            size={size}
            wide={wide}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Table.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(SIZE),
    wide: PropTypes.bool,
};

Table.defaultProps = {
    className: '',
    children: null,
    size: 'm',
    wide: false,
};

export default Table;

export const TableHead = ({ className, ...styleProps }) => (
    <StyledOuter className={`TableHead ${className}`.trim()} tag="thead" {...styleProps} />
);
export const TableBody = ({ className, ...styleProps }) => (
    <StyledBody className={`TableBody ${className}`.trim()} tag="tbody" {...styleProps} />
);
export const TableFoot = ({ className, ...styleProps }) => (
    <StyledFoot className={`TableFoot ${className}`.trim()} tag="tfoot" {...styleProps} />
);
export const TableRow = ({ className, ...styleProps }) => (
    <Box className={`TableRow ${className}`.trim()} tag="tr" {...styleProps} />
);
export const Td = ({ className, ...styleProps }) => (
    <StyledCell className={`Td ${className}`.trim()} tag="td" {...styleProps} />
);
export const Th = ({ className, ...styleProps }) => (
    <StyledHeadCell className={`Th ${className}`.trim()} tag="th" {...styleProps} />
);

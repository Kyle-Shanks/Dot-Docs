import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex';
import { StyledComponent, Label } from './Tag.styled';

const BASE_CLASS_NAME = 'Tag';
const VARIATION = ['filled', 'outline'];

// TODO: Add color prop and styles

const Tag = ({ className, children, iconLeft, iconRight, variation, ...styleProps }) => {

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            variation={variation}
            {...styleProps}
        >
            <Flex justify="center" align="center">
                {iconLeft}
                <Label>{children}</Label>
                {iconRight}
            </Flex>
        </StyledComponent>
    );
};

Tag.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    variation: PropTypes.oneOf(VARIATION),
};

Tag.defaultProps = {
    className: '',
    children: null,
    iconLeft: null,
    iconRight: null,
    variation: 'filled',
};

export default Tag;

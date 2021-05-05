import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Box.styled';

const Box = React.forwardRef(({ className, children, tag: Tag, ...styleProps }, ref) => {
    const BASE_CLASS_NAME = 'Box';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            as={Tag}
            ref={ref}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
});

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.elementType,

    // Style Props
    display: PropTypes.string,
    h: PropTypes.string,
    w: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    hGap: PropTypes.string,
    vGap: PropTypes.string,
};

Box.defaultProps = {
    children: null,
    className: '',
    tag: 'div',

    // Style Props
    display: '',
    h: '',
    w: '',
    margin: '',
    padding: '',
    fontSize: '',
    hGap: '0rem',
    vGap: '0rem',
};

export default Box;

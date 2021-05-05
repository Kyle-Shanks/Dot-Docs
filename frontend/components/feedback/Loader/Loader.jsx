import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent, LoaderSvg } from './Loader.styled';

const SIZE = ['xl', 'l', 'm', 's'];

const Loader = ({ className, size, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Loader';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            <LoaderSvg viewBox="0 0 100 100" size={size}>
                <path
                    d="M 30 65 L 50 32 L 70 65 Z"
                    strokeDasharray="18 21"
                    strokeDashoffset="6"
                />
            </LoaderSvg>
        </StyledComponent>
    );
};

Loader.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(SIZE),
};

Loader.defaultProps = {
    className: '',
    size: 'm',
};

export default Loader;

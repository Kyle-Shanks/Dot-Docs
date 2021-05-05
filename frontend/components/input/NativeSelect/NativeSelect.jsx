import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'frontend/components/layout/Box';
import { StyledComponent, ArrowIcon } from './NativeSelect.styled';

// TODO: See why empty state is not working

const NativeSelect = ({
    className,
    disabled,
    error,
    onChange,
    options,
    placeholder,
    value,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'NativeSelect';

    return (
        <Box className={`${BASE_CLASS_NAME}__wrapper ${className}`.trim()} {...styleProps}>
            <StyledComponent
                className={BASE_CLASS_NAME}
                tag="select"
                disabled={disabled}
                error={error}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                w="100%"
            >
                {options.map((opt, idx) => (
                    <option value={opt.value} key={`option_${idx}`}>{opt.label}</option>
                ))}
            </StyledComponent>
            <ArrowIcon icon="ChevronDown" />
        </Box>
    );
};

NativeSelect.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
};

NativeSelect.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    onChange: () => {},
    placeholder: '',
};

export default NativeSelect;
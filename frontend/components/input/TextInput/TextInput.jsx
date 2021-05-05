import React from 'react';
import PropTypes from 'prop-types';
import Box from 'frontend/components/layout/Box';
import { StyledComponent, Clear } from './TextInput.styled';

const VARIATION = ['outline', 'filled'];

const TextInput = ({
    className,
    disabled,
    error,
    onChange,
    placeholder,
    value,
    variation,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'TextInput';
    const handleChange = (e) => { if (!disabled) onChange(e.target.value); };

    return (
        <Box
            className={`${BASE_CLASS_NAME}__wrapper ${className}`.trim()}
            display="inline-block"
            {...styleProps}
        >
            <StyledComponent
                className={BASE_CLASS_NAME}
                tag="input"
                disabled={disabled}
                error={error}
                onChange={handleChange}
                placeholder={placeholder}
                variation={variation}
                value={value}
                w="100%"
            />
            <Clear
                tag="svg"
                viewBox="0 0 50 50"
                active={!disabled && value.length}
                onClick={() => onChange('')}
            >
                <defs>
                    <mask id="cutout">
                        <rect x="0" y="0" height="50" width="50" fill="#fff" />
                        <path d="M 21 21 L 29 29" stroke="#000"/>
                        <path d="M 21 29 L 29 21" stroke="#000"/>
                    </mask>
                </defs>
                <circle cx="25" cy="25" r="12" stroke="none" mask="url(#cutout)" />
            </Clear>
        </Box>
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    variation: PropTypes.oneOf(VARIATION),
};

TextInput.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    onChange: () => {},
    placeholder: '',
    variation: 'outline',
};

export default TextInput;
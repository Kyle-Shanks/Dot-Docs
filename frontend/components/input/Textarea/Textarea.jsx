import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Textarea.styled';

const Textarea = ({
    className,
    disabled,
    error,
    onChange,
    placeholder,
    value,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Textarea';
    const handleChange = (e) => { if (!disabled) onChange(e.target.value); };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="textarea"
            disabled={disabled}
            error={error}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            {...styleProps}
        />
    );
};

Textarea.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    placeholder: '',
};

export default Textarea;

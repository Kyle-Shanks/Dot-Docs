import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'frontend/components/layout/Container';
import RadioButton from 'frontend/components/input/RadioButton';
import { SPACING } from 'frontend/styles/constants';

const RadioGroup = ({
    className,
    defaultValue,
    onChange,
    options,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'RadioGroup';
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    useEffect(() => { onChange(selectedOption) }, [selectedOption]);

    return (
        <Container
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            hGap={SPACING.m}
            {...styleProps}
        >
            {options.map(opt => (
                <RadioButton
                    key={`RadioGroup_option_${opt.value}`}
                    disabled={opt.disabled}
                    value={opt.value}
                    checked={selectedOption === opt.value}
                    onClick={() => setSelectedOption(opt.value)}
                >
                    {opt.label}
                </RadioButton>
            ))}
        </Container>
    );
};

RadioGroup.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
};

RadioGroup.defaultProps = {
    className: '',
    defaultValue: '',
};

export default RadioGroup;

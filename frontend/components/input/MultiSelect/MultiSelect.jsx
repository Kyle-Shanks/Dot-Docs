import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'frontend/components/display/Menu';
import Checkbox from 'frontend/components/input/Checkbox';
import Box from 'frontend/components/layout/Box';
import Text from 'frontend/components/typography/Text';
import { StyledComponent, ArrowIcon, PlaceholderLabel } from './MultiSelect.styled';

const BASE_CLASS_NAME = 'MultiSelect';

const MultiSelect = ({
    className,
    disabled,
    error,
    placeholder,
    onChange,
    options,
    value,
    ...styleProps
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const optionMap = options.reduce((acc, opt) => {
        acc[opt.value] = opt.label;
        return acc;
    }, {});

    const isOptionSelected = (optionValue) => value.includes(optionValue);
    const selectOption = (optionValue) => onChange([...value, optionValue]);
    const unselectOption = (optionValue) => {
        const index = value.indexOf(optionValue);
        const newState = [...value.slice(0, index), ...value.slice(index + 1)];
        onChange(newState);
    };
    const toggleOption = (optionValue) => {
        isOptionSelected(optionValue) ? unselectOption(optionValue) : selectOption(optionValue);
    }

    return (
        <Box
            display="inline-block"
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            <StyledComponent
                className={isMenuOpen ? 'is-focused' : ''}
                disabled={disabled}
                error={error}
                onClick={() => { if (!disabled) setIsMenuOpen(!isMenuOpen) }}
            >
                {value.length
                    ? <Text truncate>{value.map(val => optionMap[val]).join(', ')}</Text>
                    : <PlaceholderLabel disabled={disabled}>{placeholder}</PlaceholderLabel>
                }
                <ArrowIcon icon="ChevronDown" />
            </StyledComponent>
            <Menu
                open={isMenuOpen}
                onClose={() => { setIsMenuOpen(false) }}
            >
                {options.map((opt) => (
                    <MenuItem
                        key={`MultiSelectMenuItem_${opt.label}`}
                        disabled={opt.disabled}
                        onClick={() => toggleOption(opt.value)}
                    >
                        <Checkbox display="block" checked={isOptionSelected(opt.value)}>
                            {opt.label}
                        </Checkbox>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

MultiSelect.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ),
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MultiSelect.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    placeholder: 'Select options...',
    onChange: () => {},
    options: [],
};

export default MultiSelect;

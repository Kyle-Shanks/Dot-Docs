import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'frontend/components/layout/Box';
import Flex from 'frontend/components/layout/Flex';
import Menu, { MenuItem } from 'frontend/components/display/Menu';
import Icon from 'frontend/components/typography/Icon';
import Text from 'frontend/components/typography/Text';
import { SPACING } from 'frontend/styles/constants';
import { StyledComponent, PlaceholderLabel, ArrowIcon } from './Select.styled';

const Select = ({
    className,
    disabled,
    error,
    placeholder,
    onChange,
    options,
    value,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Select';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getValueLabel = (val) => options.find((opt) => opt.value === val).label;

    const handleUpdate = (val) => {
        if (!disabled) onChange(val);
    };

    return (
        <Box
            display="inline-block"
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            <StyledComponent
                className={isMenuOpen ? 'is-focused' : '' }
                disabled={disabled}
                error={error}
                onClick={() => { if (!disabled) setIsMenuOpen(!isMenuOpen) }}
            >
                {value
                    ? <Text>{getValueLabel(value)}</Text>
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
                        key={`SelectMenuItem_${opt.label}`}
                        disabled={opt.disabled}
                        onClick={() => {
                            handleUpdate(opt.value);
                            setIsMenuOpen(false);
                        }}
                    >
                        <Flex align="center" wrap="none" hGap={SPACING.xs}>
                            <Box>{opt.label}</Box>
                            {opt.value === value && <Icon size="s" icon="Check" />}
                        </Flex>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
};

Select.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    placeholder: 'Select option...',
};

export default Select;

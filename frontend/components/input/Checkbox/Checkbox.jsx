import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex'
import { StyledComponent, CheckboxSvg, Label } from './Checkbox.styled';

const Checkbox = ({
    className,
    checked,
    children,
    disabled,
    onChange,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'Checkbox';

    const handleClick = () => {
        if (!disabled) onChange(!checked)
    };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            disabled={disabled}
            onClick={handleClick}
            {...styleProps}
        >
            <Flex>
                <CheckboxSvg
                    tag="svg"
                    viewBox="0 0 60 60"
                    checked={checked}
                    disabled={disabled}
                >
                    <rect x="3" y="1.5" width="54" height="54" rx="8" />
                    <path d="M 18.6 31 L 25.7 37.5 L 42.4 20" />
                </CheckboxSvg>
                <Label disabled={disabled}>{children}</Label>
            </Flex>
        </StyledComponent>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};

Checkbox.defaultProps = {
    className: '',
    children: null,
    disabled: false,
    onChange: () => {},
};

export default Checkbox;

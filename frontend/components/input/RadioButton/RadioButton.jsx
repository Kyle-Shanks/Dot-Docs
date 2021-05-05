import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'frontend/components/layout/Flex';
import { StyledComponent, RadioSvg, Label } from './RadioButton.styled';

const RadioButton = ({
    className,
    checked,
    children,
    disabled,
    onClick,
    value,
    ...styleProps
}) => {
    const BASE_CLASS_NAME = 'RadioButton';

    const handleClick = () => {
        if (!disabled) onClick(value);
    };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            disabled={disabled}
            onClick={handleClick}
            {...styleProps}
        >
            <Flex>
                <RadioSvg
                    tag="svg"
                    viewBox="0 0 60 60"
                    disabled={disabled}
                >
                    <circle className="outline" cx="30" cy="30" r="25" />
                    <circle className="fill" cx="30" cy="30" r={checked ? "12.5" : "0"} />
                </RadioSvg>
                <Label disabled={disabled}>{children}</Label>
            </Flex>
        </StyledComponent>
    );
};

RadioButton.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
    className: '',
    children: null,
    disabled: false,
};

export default RadioButton;

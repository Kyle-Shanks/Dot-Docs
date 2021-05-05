import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { vertCenter } from 'frontend/styles/util';
import { SPACING, borderWidth, borderRadiusM, defaultTransition } from 'frontend/styles/constants';

const getBackgroundColor = ({ theme, variation, disabled }) => {
    if (variation === 'filled') {
        return disabled ? theme.filledInputDisabledBackground : theme.filledInputBackground;
    }
    return 'transparent';
};

const getBorderColor = ({ theme, disabled, error, variation }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    if (variation === 'filled') {
        const c = disabled ? theme.filledInputDisabledBackground : theme.filledInputBackground;
        return `${borderWidth} solid ${c}`;
    }
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.border}`;
};

const getHoverBackgroundColor = ({ theme, variation, disabled }) => {
    if (variation === 'filled') {
        return (disabled ? theme.filledInputDisabledBackground : theme.filledInputHoverBackground);
    }
    return 'transparent';
};

const getHoverBorderColor = ({ theme, disabled, error, variation }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    if (variation === 'filled') {
        const c = disabled ? theme.filledInputDisabledBackground : theme.filledInputHoverBackground;
        return `${borderWidth} solid ${c}`;
    }
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.borderHover}`;
};

export const StyledComponent = styled(Box)`
    min-width: 16rem;
    padding: ${SPACING.s} ${SPACING.l} ${SPACING.s} ${SPACING.m};
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    background-color: ${(props) => getBackgroundColor(props)};
    border: ${(props) => getBorderColor(props)};
    border-radius: ${borderRadiusM};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};

    &::placeholder {
        transition: ${defaultTransition};
        color: ${({ theme, disabled }) => disabled ? theme.textDisabledPlaceholder : theme.textPlaceholder};
    }

    &:hover {
        background-color: ${(props) => getHoverBackgroundColor(props)};
        border: ${(props) => getHoverBorderColor(props)};
    }

    &:focus {
        background-color: transparent;
        border: ${({ theme, error }) => `${borderWidth} solid ${error ? theme.error : theme.borderActive}`};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.borderActive)};
    }
`;

export const Clear = styled(Box)`
    ${vertCenter}
    right: ${SPACING.xxs};
    height: ${SPACING.l};
    width: ${SPACING.l};
    border-radius: 100%;
    opacity: ${({ active }) => active ? '1' : '0'};
    pointer-events: ${({ active }) => active ? 'all' : 'none'};
    cursor: ${({ active }) => active ? 'pointer' : 'inherit'};

    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    & > circle { fill: ${({ theme }) => theme.icon}; }
    &:hover > circle { fill: ${({ theme }) => theme.iconHover}; }
`;

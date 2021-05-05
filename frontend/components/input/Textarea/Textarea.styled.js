import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaBlock } from 'frontend/styles/util';
import { SPACING, borderWidth, borderRadiusS, defaultTransition } from 'frontend/styles/constants';

const getBorder = ({ theme, disabled, error }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.border}`;
};

const getBorderHover = ({ theme, disabled, error }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.borderHover}`;
};

export const StyledComponent = styled(Box)`
    ${relaBlock}
    min-width: 20rem;
    padding: ${SPACING.s} ${SPACING.m};
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    background-color: transparent;
    border: ${(props) => getBorder(props)};
    border-radius: ${borderRadiusS};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};

    &::placeholder {
        transition: ${defaultTransition};
        color: ${({ theme, disabled }) => disabled ? theme.textDisabledPlaceholder : theme.textPlaceholder};
    }

    &:hover {
        border: ${(props) => getBorderHover(props)};
    }

    &:focus {
        border: ${borderWidth} solid ${({ theme, error }) => error ? theme.error : theme.borderActive};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.borderActive)};
    }
`;

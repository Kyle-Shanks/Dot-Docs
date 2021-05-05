import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline } from 'frontend/styles/util';
import { SPACING, defaultCheckboxSize } from 'frontend/styles/constants';

export const StyledComponent = styled(Box)`
    ${relaInline}
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    user-select: ${({ disabled }) => disabled ? 'none' : 'auto'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export const RadioSvg = styled(Box)`
    height: ${defaultCheckboxSize};
    width: ${defaultCheckboxSize};
    margin-right: ${SPACING.xs};
    transition: 0s;

    & > .outline {
        fill: none;
        stroke: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
        stroke-width: 8;
    }

    & > .fill {
        fill: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
        stroke: none;
    }
`;

export const Label = styled(Box)`
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    text-decoration: ${({ disabled }) => disabled ? 'line-through' : 'none'};
`;

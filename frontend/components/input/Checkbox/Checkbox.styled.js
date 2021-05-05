import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline } from 'frontend/styles/util';
import { SPACING, defaultCheckboxSize } from 'frontend/styles/constants';

const getSvgFill = ({ theme, checked, disabled }) => {
    if (!checked) return 'transparent';
    return disabled ? theme.textDisabled : theme.textPrimary;
};

export const StyledComponent = styled(Box)`
    ${relaInline}
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    user-select: ${({ disabled }) => disabled ? 'none' : 'auto'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export const CheckboxSvg = styled(Box)`
    height: ${defaultCheckboxSize};
    width: ${defaultCheckboxSize};
    margin-right: ${SPACING.xs};
    fill: none;
    stroke: ${({ theme, checked }) => checked ? theme.background : 'transparent'};
    stroke-width: 5;
    stroke-linecap: round;
    transition: 0s;

    & > rect {
        stroke-width: 2.5;
        fill: ${(props) => getSvgFill(props)};
        stroke: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    }
`;

export const Label = styled(Box)`
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    text-decoration: ${({ disabled }) => disabled ? 'line-through' : 'none'};
`;

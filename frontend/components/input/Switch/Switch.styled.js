import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline, absCenter } from 'frontend/styles/util';

const getVariationStyles = ({ theme, variation, disabled }) => {
    if (variation === 'outline') {
        return `box-shadow: 0 0 0 2px ${disabled ? theme.textDisabled : theme.textPrimary};`;
    }
    return `background-color: ${disabled ? theme.textDisabled : theme.textPrimary};`;
};

const getThumbColor = ({ theme, variation, disabled }) => {
    if (variation === 'filled') return theme.background;
    return disabled ? theme.textDisabled : theme.textPrimary;
};

export const StyledComponent = styled(Box)`
    ${relaInline}
    height: 1.25rem;
    width: 2.5rem;
    border-radius: 10rem;
    ${(props) => getVariationStyles(props)}
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

export const Thumb = styled(Box)`
    ${absCenter}
    left: ${({ value }) => value ? '75%' : '25%'};
    height: 1rem;
    width: 1rem;
    background-color: ${(props) => getThumbColor(props)};
    border-radius: 100%;
`;

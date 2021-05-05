import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import Flex from 'frontend/components/layout/Flex';
import { relaInline } from 'frontend/styles/util';
import {
    SPACING,
    FONT_SIZE,
    FONT_WEIGHT,
    borderRadiusM,
} from 'frontend/styles/constants';

const paddingMap = {
    l: `${SPACING.m} ${SPACING.ml}`,
    m: `${SPACING.s} ${SPACING.m}`,
    s: `${SPACING.xxs} ${SPACING.s}`,
    icon: SPACING.xs,
};

const fontSizeMap = {
    l: FONT_SIZE.ml,
    m: FONT_SIZE.m,
    s: FONT_SIZE.s,
    icon: FONT_SIZE.m,
};

const getBackgroundColor = ({ theme, variation }) => {
    return variation === 'primary' ? theme.buttonPrimaryBackground : 'transparent';
};

const getHoverBackgroundColor = ({ theme, variation }) => {
    return variation === 'primary' ? theme.buttonPrimaryHoverBackground : theme.backgroundActive;
};

const getBorderColor = ({ theme, variation }) => {
    switch (variation) {
        case 'primary': return theme.buttonPrimaryBackground;
        case 'secondary': return theme.border;
        default: return 'transparent';
    }
};

const getHoverBorderColor = ({ theme, variation }) => {
    switch (variation) {
        case 'primary': return theme.buttonPrimaryHoverBackground;
        case 'secondary': return theme.borderHover;
        default: return 'transparent';
    }
};

const getColor = ({ theme, variation }) => {
    return (variation === 'primary') ? theme.background : theme.textPrimary;
};

export const StyledComponent = styled(Box)`
    ${relaInline}
    vertical-align: middle;
    cursor: pointer;
    min-width: ${({ size }) => size === 'icon' ? '0rem' : `6rem`};
    padding: ${({ size }) => paddingMap[size]};
    background-color: ${(props) => getBackgroundColor(props)};
    border: ${(props) => `1px solid ${getBorderColor(props)}`};
    font-size: ${({ size }) => fontSizeMap[size]};
    color: ${(props) => getColor(props)};
    font-weight: ${FONT_WEIGHT.semibold};
    border-radius: ${borderRadiusM};

    & svg {
        transition: color 0s;
        color: ${(props) => getColor(props)};
    }

    &:hover {
        background-color: ${(props) => getHoverBackgroundColor(props)};
        border: ${(props) => `1px solid ${getHoverBorderColor(props)}`};
    }

    &:active {
        pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
    }
`;

export const Label = styled(Flex)`
    color: ${(props) => getColor(props)};
    padding: ${SPACING.xs};
`;

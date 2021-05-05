import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import Icon from 'frontend/components/typography/Icon';
import Text from 'frontend/components/typography/Text';
import { SPACING, FONT_WEIGHT, borderRadiusM } from 'frontend/styles/constants';
import { relaBlock, absCenter } from 'frontend/styles/util';

export const StyledComponent = styled(Box)`
    ${relaBlock}
    padding: ${SPACING.sm} ${SPACING.l} ${SPACING.sm} ${SPACING.xl};
    border-radius: ${borderRadiusM};
    background-color: ${({ theme, type }) => theme[type]}30;
    color: ${({ theme }) => theme.textPrimary};
`;

export const AlertIcon = styled(Icon)`
    ${absCenter}
    left: ${SPACING.ml};

    & > svg {
        color: ${({ theme, type }) => theme[type]};
    }
`;

export const AlertTitle = styled(Text)`
    font-weight: ${FONT_WEIGHT.semibold};
    margin-right: ${SPACING.s};
`;

export const AlertDescription = styled(Text)``;

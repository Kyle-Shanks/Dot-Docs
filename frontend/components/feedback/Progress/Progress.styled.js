import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import Text from 'frontend/components/typography/Text';
import { FONT_SIZE } from 'frontend/styles/constants';
import { relaBlock, absCenter } from 'frontend/styles/util';

export const StyledComponent = styled(Box)`
    ${relaBlock}
    height: 8rem;
    width: 8rem;
`;

export const StyledSvg = styled(Box)`
    ${absCenter}
    transform: translate(-50%, -50%) rotateZ(-90deg);
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
`;

export const BackgroundCircle = styled(Box)`
    stroke: ${({ theme }) => theme.borderDisabled};
    stroke-width: 8;
    fill: none;
`;

export const ProgressCircle = styled(Box)`
    stroke: ${({ theme }) => theme.borderActive};
    stroke-width: 8;
    stroke-linecap: round;
    fill: none;
`;

export const Label = styled(Text)`
    ${absCenter}
    font-size: ${FONT_SIZE.s};
`;

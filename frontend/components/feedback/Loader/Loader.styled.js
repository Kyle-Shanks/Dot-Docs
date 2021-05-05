import styled, { keyframes } from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaBlock, absCenter } from 'frontend/styles/util';

const spin = keyframes`
    0% { stroke-dashoffset: 6 }
    70%, 100% { stroke-dashoffset: 45 }
`;

const fade = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`;

const svgSizeMap = {
    xl: '10rem',
    l: '8rem',
    m: '6rem',
    s: '4rem',
};

export const StyledComponent = styled(Box)`
    ${relaBlock}
    height: 10rem;
    user-select: none;
`;

export const LoaderSvg = styled.svg`
    ${absCenter}
    height: ${({ size }) => svgSizeMap[size]};
    width: ${({ size }) => svgSizeMap[size]};
    stroke: ${({ theme }) => theme.icon};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;

    opacity: 0;
    animation: ${fade} 0.6s 0.3s cubic-bezier(0.5,0,0.2,1) forwards;

    & path {
        animation: ${spin} 1.2s cubic-bezier(0.5,0,0.2,1) infinite;
    }
`;

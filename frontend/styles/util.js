import { keyframes } from 'styled-components';
import { SPACING } from './constants';

// General use style snippets for styled components
export const relaBlock = `
    position: relative;
    display: block;
`;
export const relaInline = `
    position: relative;
    display: inline-block;
`;

export const absCenter = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const vertCenter = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
export const horzCenter = `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const _fill = `
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const absFill = `
    position: absolute;
    ${_fill}
`;
export const fixedFill = `
    position: fixed;
    ${_fill}
`;

export const ellipsisStyles = `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Animations
export const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(${SPACING.m}); }
    to { opacity: 1; transform: translateY(0); }
`;

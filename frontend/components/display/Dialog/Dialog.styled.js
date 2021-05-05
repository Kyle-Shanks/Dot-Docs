import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { horzCenter, fixedFill, relaBlock } from 'frontend/styles/util';
import { SPACING, Z_INDEX, borderRadiusM } from 'frontend/styles/constants';

export const DialogOverlay = styled(Box)`
    z-index: ${Z_INDEX.overlay};
    ${fixedFill}
    background-color: ${({ open }) => open ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'};
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
`;

export const DialogContainer = styled(Box)`
    z-index: ${Z_INDEX.modal};
    ${horzCenter}
    width: 30rem;
    background-color: ${({ theme }) => theme.displayBackground};
    border-radius: ${borderRadiusM};
    box-shadow: 0 4px 12px -1px rgba(0,0,0,0.1), 0 10px 32px -1px rgba(0,0,0,0.1);

    // Toggle Styles
    ${({ open }) => open
        ? `opacity: 1; pointer-events: all; top: ${SPACING.xl};`
        : `opacity: 0; pointer-events: none; top: calc(${SPACING.xl} + ${SPACING.l});`
    }
`;

export const DialogSection = styled(Box)`
    ${relaBlock}
    min-height: 4rem;
    padding: ${SPACING.m} ${SPACING.l};
`;

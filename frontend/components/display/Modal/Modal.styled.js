import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import Button from 'frontend/components/input/Button';
import { absCenter, fixedFill, relaBlock } from 'frontend/styles/util';
import { SPACING, Z_INDEX, borderWidth, borderRadiusM } from 'frontend/styles/constants';

const modalSizeMap = {
    l: '75vw',
    m: '60vw',
    s: '45vw',
};

export const ModalOverlay = styled(Box)`
    z-index: ${Z_INDEX.overlay};
    ${fixedFill}
    background-color: ${({ open }) => open ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'};
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
`;

export const ModalContainer = styled(Box)`
    z-index: ${Z_INDEX.modal};
    ${absCenter}
    min-width: 30rem;
    width: ${({ size }) => modalSizeMap[size]};
    background-color: ${({ theme }) => theme.displayBackground};
    border-radius: ${borderRadiusM};
    box-shadow: 0 4px 12px -1px rgba(0,0,0,0.1), 0 10px 32px -1px rgba(0,0,0,0.1);

    // Toggle Styles
    ${({ open }) => open
        ? `opacity: 1; pointer-events: all; top: 44%;`
        : `opacity: 0; pointer-events: none; top: 50%;`
    }
`;

export const CloseButton = styled(Button)`
    position: absolute;
    top: ${SPACING.m};
    right: ${SPACING.m};
`;

export const ModalHeader = styled(Box)`
    min-height: 5rem;
    padding: ${SPACING.m} ${SPACING.xl};
    border-bottom: ${borderWidth} solid ${({ theme }) => theme.border};
`;

export const ModalContent = styled(Box)`
    ${relaBlock}
    min-height: 40vh;
    max-height: 60vh;
    padding: ${SPACING.m} ${SPACING.xl};
    overflow: auto;
`;

export const ModalFooter = styled(Box)`
    min-height: 5rem;
    padding: ${SPACING.m} ${SPACING.xl};
    border-top: ${borderWidth} solid ${({ theme }) => theme.border};
`;

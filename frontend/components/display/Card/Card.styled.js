import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { SPACING, Z_INDEX, borderWidth, borderRadiusM } from 'frontend/styles/constants';

export const StyledComponent = styled(Box)`
    z-index: ${Z_INDEX.display};
    background-color: ${({ theme }) => theme.displayBackground};
    border: ${borderWidth} solid ${({ theme }) => theme.displayBorder};
    border-radius: ${borderRadiusM};
    padding: ${SPACING.l};
`;

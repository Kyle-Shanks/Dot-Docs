import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaBlock } from 'frontend/styles/util';
import { SPACING, borderWidth } from 'frontend/styles/constants';

export const StyledComponent = styled(Box)`
    ${relaBlock}
    border: 0;
    border-top: ${borderWidth} solid ${({ theme }) => theme.border};
    margin: ${SPACING.m} 0;
`;

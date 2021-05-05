import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline } from 'frontend/styles/util';
import { SPACING } from 'frontend/styles/constants';

export const Separator = styled(Box)`
    ${relaInline}
    color: ${({ theme }) => theme.textSecondary};
    padding: 0 ${SPACING.s};
`;

import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline } from 'frontend/styles/util';

export const StyledComponent = styled(Box)`
    ${relaInline}
    color: ${({ theme }) => theme.textLink};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

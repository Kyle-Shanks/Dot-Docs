import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';

export const StyledComponent = styled(Box)`
    margin: 0 auto;
    max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '60rem')};
`;

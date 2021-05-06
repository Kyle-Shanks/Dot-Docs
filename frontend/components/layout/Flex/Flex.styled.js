import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';

export const StyledComponent = styled(Box)`
    display: flex;
    flex-wrap: ${({ wrap }) => wrap };
    flex-direction: ${({ direction }) => direction };
    justify-content: ${({ justify }) => justify };
    align-items: ${({ align }) => align };
    gap: ${({ gap }) => gap };
`;

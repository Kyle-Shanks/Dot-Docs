import styled from 'styled-components';
import { Box } from 'frontend/components/layout';
import { relaBlock } from 'frontend/styles/util';

export const MainContent = styled(Box)`
    ${relaBlock}
    flex: 1 1 0;
    height: 100vh;
    overflow: auto;
`;

import styled from 'styled-components';
import { Box } from 'frontend/components/layout';

const SIDEBAR_WIDTH = '18rem';

export const MainContent = styled(Box)`
    position: fixed;
    top: 0;
    left: ${SIDEBAR_WIDTH};
    right: 0;
    bottom: 0;
    overflow: auto;
`;

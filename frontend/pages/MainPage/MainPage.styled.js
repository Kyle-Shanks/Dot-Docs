import styled from 'styled-components';
import { Box } from 'frontend/components/layout';
import { SPACING } from 'frontend/styles/constants';

const SIDEBAR_WIDTH = '18rem';

export const Sidebar = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${SIDEBAR_WIDTH};
    padding: ${SPACING.m};
    box-shadow: 1px 0 0 0 ${({ theme }) => theme.border};
    overflow: auto;
`;

export const MainContent = styled(Box)`
    position: fixed;
    top: 0;
    left: ${SIDEBAR_WIDTH};
    right: 0;
    bottom: 0;
    overflow: auto;
`;

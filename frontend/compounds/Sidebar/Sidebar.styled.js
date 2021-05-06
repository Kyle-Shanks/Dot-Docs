import styled from 'styled-components';
import { Container } from 'frontend/components/layout';
import { SPACING } from 'frontend/styles/constants';
import { relaBlock } from 'frontend/styles/util';

export const StyledContainer = styled(Container)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18rem;
    padding: ${SPACING.m} 0;
    box-shadow: 1px 0 0 0 ${({ theme }) => theme.border};
    overflow: auto;
`;

export const MenuLink = styled.a`
    ${relaBlock}
    color: ${({ active, theme }) => active ? theme.textPrimary : theme.textSecondary};
    padding: ${SPACING.xs} ${SPACING.l};
    text-decoration: none;
    box-shadow: inset ${({ active }) => active ? '-3px' : '0px'} 0 0 0 ${({ theme }) => theme.borderActive};
    // border-right: ${({ active }) => active ? '3px' : '0px'} solid ${({ theme }) => theme.borderActive};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.textPrimary};
        text-decoration: underline;
    }
`;

import styled from 'styled-components';
import { Flex } from 'frontend/components/layout';
import { Header } from 'frontend/components/typography';
import { SPACING, defaultTransition } from 'frontend/styles/constants';
import { relaBlock, vertCenter, absFill } from 'frontend/styles/util';

export const StyledContainer = styled(Flex)`
    flex-direction: column;
    height: 100vh;
    width: 18rem;
    box-shadow: 1px 0 0 0 ${({ theme }) => theme.border};
    overflow: auto;
`;

export const Logo = styled(Header)`
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const LinkContainer = styled(Container)`
    ${relaBlock}
    flex: 1 1 0;
    width: 100%;
    overflow: auto;
    padding-bottom: ${SPACING.l};
`;

export const MenuLink = styled.a`
    ${relaBlock}
    color: ${({ active, theme }) => active ? theme.textPrimary : theme.textSecondary};
    padding: ${SPACING.xs} ${SPACING.l};
    text-decoration: none;
    // box-shadow: inset ${({ active }) => active ? '-3px' : '0px'} 0 0 0 ${({ theme }) => theme.primary};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.textPrimary};
        text-decoration: underline;
    }

    &::after {
        content: '';
        ${vertCenter}
        height: 0.375rem;
        width: 0.375rem;
        margin: 0 ${SPACING.s};
        border-radius: 100%;
        background-color: ${({ active, theme }) => active ? theme.primary : 'transparent'};
        transition: ${defaultTransition};
    }
`;

import styled from 'styled-components';
import { Container } from 'frontend/components/layout';
import { SPACING, defaultTransition } from 'frontend/styles/constants';
import { relaBlock, vertCenter } from 'frontend/styles/util';

export const StyledContainer = styled(Container)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18rem;
    padding: ${SPACING.l} 0;
    box-shadow: 1px 0 0 0 ${({ theme }) => theme.border};
    overflow: auto;
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

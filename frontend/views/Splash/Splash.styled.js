import styled from 'styled-components';
import { SPACING } from 'frontend/styles/constants';

export const ListItem = styled.li`
    color: ${({ theme }) => theme.textPrimary};

    &::before {
        content: '-';
        padding-right: ${SPACING.s};
    }
`;

export const ListContainer = styled.ul`
    & > ${ListItem}:not(:last-child) {
        margin-bottom: ${SPACING.xs};
    }
`;

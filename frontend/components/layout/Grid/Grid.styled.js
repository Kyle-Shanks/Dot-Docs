import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';

export const StyledComponent = styled(Box)`
    display: grid;
    ${({ template, rows, columns, areas }) => {
        if (template) return `grid-template: ${template};`
        return (rows ? `grid-template-rows: ${rows};` : '')
            + (columns ? `grid-template-columns: ${columns};` : '')
            + (areas ? `grid-template-areas: ${areas};` : '');
    }}
    gap: ${({ gap }) => gap };
    justify-content: ${({ justify }) => justify };
    align-content: ${({ align }) => align };
`;

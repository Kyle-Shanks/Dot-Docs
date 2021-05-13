import styled from 'styled-components';
import { Container } from 'frontend/components/layout';
import { Header } from 'frontend/components/typography';
import { FONT_SIZE, SPACING } from 'frontend/styles/constants';
import { vertCenter } from 'frontend/styles/util';

export const StyledContainer = styled(Container)``;

export const SectionHeader = styled(Header)`
    &::before {
        content: '';
        ${vertCenter}
        left: -${SPACING.m};
        height: 0.5rem;
        width: 0.5rem;
        background-color: ${({ theme }) => theme.primary};
        border-radius: 100%;
    }
`;

export const ConstructorContainer = styled(Container)`
    box-shadow: -5px 0 0 -2px ${({ theme }) => theme.border};
    padding: ${SPACING.xs} ${SPACING.sm};
`;

export const MethodContainer = styled(Container)`
    box-shadow: -5px 0 0 -2px ${({ theme }) => theme.borderActive};
    padding: ${SPACING.xs} ${SPACING.sm};
`;

export const ExampleCode = styled.pre`
    color: ${({ theme }) => theme.textPrimary};
    font-size: ${FONT_SIZE.s};
    font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
    text-shadow: none;
    white-space: pre-wrap;
    word-spacing: normal;
    overflow-wrap: break-word;
    word-break: keep-all;
`;

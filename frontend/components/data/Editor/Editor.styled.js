import styled from 'styled-components';
import { SPACING, borderRadiusS } from 'frontend/styles/constants';
import { relaBlock } from 'frontend/styles/util';

const EDITOR_BACKGROUND_COLOR = '#1c252c';

export const ComponentContainer = styled.div`
    ${relaBlock}
    margin: auto;
    background: ${EDITOR_BACKGROUND_COLOR};
    border-radius: ${borderRadiusS};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.textPrimary};
    overflow: hidden;
`;

export const EditorContainer = styled.div`
    ${relaBlock}
    padding: ${SPACING.m} ${SPACING.ml};
    overflow: auto;
`;

const editorStyles = `
    ${relaBlock}
    font-size: 13px;
    font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
    text-shadow: none;
    white-space: pre-wrap !important;
    word-spacing: normal;
    overflow-wrap: break-word;
    word-break: keep-all;
    line-height: 1.5;
    tab-size: 4;
`;

export const CodeDisplay = styled.pre`
    min-height: 100%;
    ${editorStyles}

    & > code {
        ${editorStyles}
    }
`;

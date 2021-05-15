import { createGlobalStyle } from 'styled-components';
import { defaultTransition, TYPOGRAPHY } from 'frontend/styles/constants';
import highlightStyles from './highlightStyles';
import resetStyles from './resetStyles';

const typographyStyles = `
    font-family: ${TYPOGRAPHY.defaultFontFamily};
    font-size: ${TYPOGRAPHY.defaultFontSize};
    line-height: ${TYPOGRAPHY.defaultLineHeight};
    font-weight: ${TYPOGRAPHY.defaultFontWeight};
    letter-spacing: ${TYPOGRAPHY.defaultLetterSpacing};
`;

export const GlobalStyles = createGlobalStyle`
    ${resetStyles}

    * {
        box-sizing: border-box;
        transition: ${defaultTransition};
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textPrimary};
        ${typographyStyles}
    }

    input, button, select, textarea {
        ${typographyStyles}
        outline: none;
        border: none;
    }

    ${highlightStyles}
`;

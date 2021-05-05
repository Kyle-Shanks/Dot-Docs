import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { ellipsisStyles } from 'frontend/styles/util';
import { TYPOGRAPHY } from 'frontend/styles/constants';

export const StyledComponent = styled(Box)`
    color: ${({ theme, variation }) => variation === 'primary' ? theme.textPrimary : theme.textSecondary};
    font-size: ${({ variation }) => TYPOGRAPHY[variation].fontSize};
    font-weight: ${({ variation }) => TYPOGRAPHY[variation].fontWeight};
    letter-spacing: ${({ variation }) => TYPOGRAPHY[variation].letterSpacing};
    text-align: ${({ align }) => align};
    ${({ truncate }) => truncate && ellipsisStyles}
`;

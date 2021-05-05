import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { ellipsisStyles } from 'frontend/styles/util';
import { TYPOGRAPHY } from 'frontend/styles/constants';

export const StyledComponent = styled(Box)`
    color: ${({ theme }) => theme.textPrimary};
    font-size: ${({ tag }) => TYPOGRAPHY[tag].fontSize};
    font-weight: ${({ tag }) => TYPOGRAPHY[tag].fontWeight};
    letter-spacing: ${({ tag }) => TYPOGRAPHY[tag].letterSpacing};
    text-align: ${({ align }) => align};
    ${({ truncate }) => truncate && ellipsisStyles}
`;

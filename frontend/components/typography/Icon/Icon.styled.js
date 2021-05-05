import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import { relaInline } from 'frontend/styles/util';
import {
    defaultIconStrokeWidth,
    iconSizeXL,
    iconSizeL,
    iconSizeM,
    iconSizeS,
} from 'frontend/styles/constants';

const sizeMap = {
    xl: iconSizeXL,
    l: iconSizeL,
    m: iconSizeM,
    s: iconSizeS,
};

export const StyledComponent = styled(Box)`
    ${relaInline}
    height: ${({ size }) => sizeMap[size]};
    min-height: ${({ size }) => sizeMap[size]};
    width: ${({ size }) => sizeMap[size]};
    min-width: ${({ size }) => sizeMap[size]};
    & > svg {
        stroke-width: ${defaultIconStrokeWidth};
        vertical-align: baseline;
    }
`;

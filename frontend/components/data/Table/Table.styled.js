import styled from 'styled-components';
import Box from 'frontend/components/layout/Box';
import {
    SPACING,
    FONT_SIZE,
    FONT_WEIGHT,
    borderRadiusM,
    borderRadiusS,
} from 'frontend/styles/constants';

const widthMap = {
    l: '60rem',
    m: '44rem',
    s: '36rem',
};

const cellPaddingMap = {
    l: SPACING.ml,
    m: SPACING.m,
    s: `${SPACING.s} ${SPACING.m}`,
};

const headFontSizeMap = {
    l: FONT_SIZE.ml,
    m: FONT_SIZE.m,
    s: FONT_SIZE.m,
};

export const StyledCell = styled(Box)`
    ${({ align }) => align && `text-align: ${align};`}
    color: ${({ theme }) => theme.textPrimary};

	& + & {
        box-shadow: -1px 0 0 0 ${({ theme }) => theme.border};
    }
`;

export const StyledHeadCell = styled(StyledCell)``;

export const StyledOuter = styled(Box)`
    font-weight: ${FONT_WEIGHT.medium};
`;

export const StyledComponent = styled(Box)`
    margin: 0 auto;
    width: 100%;
    ${({ size, wide }) => !wide && `max-width: ${widthMap[size]};`}
    border-radius: ${({ size }) => size === 'l' ? borderRadiusM : borderRadiusS};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.border};

    & ${StyledCell} {
        padding: ${({ size }) => cellPaddingMap[size]};
    }

    & ${StyledOuter} {
        font-size: ${({ size }) => headFontSizeMap[size]};
    }
`;

export const StyledFoot = styled(StyledOuter)`
    box-shadow: 0 -1px 0 0 ${({ theme }) => theme.border};
`;

export const StyledBody = styled(Box)`
    & > tr {
        box-shadow: 0 -1px 0 0 ${({ theme }) => theme.border};
    }
`;

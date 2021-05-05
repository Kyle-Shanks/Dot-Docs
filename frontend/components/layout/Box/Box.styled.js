import styled from 'styled-components';

export const StyledComponent = styled.div`
    position: relative;

    && {
        ${({ display }) => display && `display: ${display};`}
        ${({ h }) => h && `height: ${h};`}
        ${({ w }) => w && `width: ${w};`}
        ${({ margin }) => margin && `margin: ${margin};`}
        ${({ padding }) => padding && `padding: ${padding};`}
        ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    }

    & > * + * {
        ${({ hGap }) => `margin-left: ${hGap}`};
        ${({ vGap }) => `margin-top: ${vGap}`};
    }

    // For instant icon color updates
    & svg {
        color: ${({ theme }) => theme.icon};
    }
`;

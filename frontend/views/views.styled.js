import styled from 'styled-components';
import { Container } from 'frontend/components/layout';
import { defaultTransition } from 'frontend/styles/constants';
import { fadeIn } from 'frontend/styles/util';

export const StyledContainer = styled(Container)`
    & > * {
        animation: ${fadeIn} ${defaultTransition} forwards;
    }
`;

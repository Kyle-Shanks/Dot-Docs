import styled from 'styled-components';
import { Box, Container, Flex } from 'frontend/components/layout';
import { relaBlock, absFill } from 'frontend/styles/util';

export const DemoContainer = styled(Container)`
    text-align: center;
`;

export const Keyboard = styled(Container)`
    ${relaBlock}
    width: 18rem;
    height: 6rem;
`;

export const Key = styled(Box)`
    flex: 1 1 0;
    border-radius: 0 0 0.25rem 0.25rem;
    box-sizing: border-box;
    transition: 0.1s ease;
    text-align: center;
    font-weight: 300;
`;

export const WhiteKeys = styled(Flex)`
    ${absFill}

    & ${Key} {
        box-sizing: border-box;
		box-shadow: 0 0 0 1px #d6d6d6;
		background-color: #fff;
		padding-top: 4.5rem;
		color: #666;
		&.active {
			background-color: #eee;
		}
    }
`;

export const BlackKeys = styled(Flex)`
    ${absFill}
    bottom: 38%;

    & .space { flex: 0.6 1 0; }
    & .big-space { flex: 1 1 0; }
    & ${Key} {
        margin: 0 0.25rem;
        background-color: #333;
        padding-top: 2.5rem;
        color: #ddd;

        &.active {
            background-color: #666;
        }
    }
`;

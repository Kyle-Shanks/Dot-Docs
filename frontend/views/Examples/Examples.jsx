import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'frontend/components/data';
import { Alert } from 'frontend/components/feedback';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { FadeContainer } from 'frontend/views/views.styled';
import { basicExample, chaingExample, keyboardExample, pluckExample } from './exampleCode';

const BASE_CLASS_NAME = 'Examples';

const Examples = ({ className }) => (
    <FadeContainer>
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Header tag="h2" margin={`0 0 ${SPACING.xl}`}>Examples</Header>

            <Container margin={`0 0 ${SPACING.xxl}`}>
                <Header tag="h3" margin={`0 0 ${SPACING.s}`}>Basic Example</Header>
                <Text margin={`0 0 ${SPACING.m}`}>
                    This is a basic example demonstrating how to import, connect, and use a node.
                </Text>
                <Editor content={basicExample} />
            </Container>

            <Container margin={`0 0 ${SPACING.xxl}`}>
                <Header tag="h3" margin={`0 0 ${SPACING.s}`}>Node Properties Example</Header>
                <Text margin={`0 0 ${SPACING.m}`}>
                    This is an example demonstrating how to pass options to node to initalize differently from the default settings.
                </Text>
                <Editor content={pluckExample} />
            </Container>

            <Container margin={`0 0 ${SPACING.xxl}`}>
                <Header tag="h3" margin={`0 0 ${SPACING.s}`}>Node Chaining Example</Header>
                <Text margin={`0 0 ${SPACING.m}`}>
                    This is an example demonstrating how to create multiple nodes and connect them all in a series at once.
                </Text>
                <Editor content={chaingExample} />
            </Container>

            <Container margin={`0 0 ${SPACING.xxl}`}>
                <Header tag="h3" margin={`0 0 ${SPACING.s}`}>Keyboard Example</Header>
                <Text margin={`0 0 ${SPACING.m}`}>
                    This is an example demonstrating how to set up a Keyboard instance to accept input from the user and play an instrument based on that input.
                </Text>
                <Alert type="warning" margin={`0 0 ${SPACING.s}`}>
                    <Text>
                        Browsers will not play audio by default without some form of interaction from the user (i.e. click or key press).
                        This example demonstrates a method to resume the audio context when the user attempts to play a note.
                    </Text>
                </Alert>
                <Editor content={keyboardExample} />
            </Container>
        </Container>
    </FadeContainer>
);

Examples.propTypes = {
    className: PropTypes.string,
};

Examples.defaultProps = {
    className: '',
};

export default Examples;

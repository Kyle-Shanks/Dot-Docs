import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Editor } from 'frontend/components/data';
import { Container } from 'frontend/components/layout';
import { Alert } from 'frontend/components/feedback';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { FadeContainer } from 'frontend/views/views.styled';

const BASE_CLASS_NAME = 'Overview';

const ListItem = styled.li`
    color: ${({ theme }) => theme.textPrimary};

    &::before {
        content: '-';
        padding-right: ${SPACING.s};
    }
`;

const ListContainer = styled.ul`
    & > ${ListItem}:not(:last-child) {
        margin-bottom: ${SPACING.xs};
    }
`;

const Overview = ({ className }) => {

    return (
        <FadeContainer>
            <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
                <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Overview</Header>
                <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                    <Text align="justify">
                        Dot includes a collection of nodes, classes, and utility functions to make creating audio projects as easy as possible, while still remaining lightweight and flexible.
                    </Text>

                    <Text>A general overview of what is available:</Text>
                    <ListContainer>
                        <ListItem>Wrappers for most native web audio api nodes (gain, filter, delay, etc.)</ListItem>
                        <ListItem>ADSR envelope nodes (general-purpose envelope, gain envelope, filter envelope)</ListItem>
                        <ListItem>Effect nodes (chorus, distortion, reverb, etc.)</ListItem>
                        <ListItem>Source nodes for signal generation and modulation (oscillator, lfo, noise generator, etc.)</ListItem>
                        <ListItem>Custom instruments for general use (MonoSynth, PolySynth, FMSynth, etc.)</ListItem>
                        <ListItem>Pre-built keyboard input class (more input classes will be added in the future)</ListItem>
                    </ListContainer>
                </Container>

                <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Nodes</Header>
                <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                    <Text align="justify">All nodes are created using the following syntax:</Text>
                    <Editor content={`const node = new Dot.NodeName(AC, props)`} />
                    <Text>
                        All DotAudioNodes have access to ::connect and ::disconnect methods to modify connections to other DotAudioNodes or native audio nodes.
                    </Text>
                    <Alert type="warning">
                        <Text>
                            Native audio nodes will not be able to connect to DotAudioNodes directly, but may be connected to params via the ::getParam and ::getParams methods.
                        </Text>
                    </Alert>
                </Container>

                <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Input Classes</Header>
                <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                    <Text align="justify">Input classes provide methods for the user to interact with audio projects.</Text>
                    <Text align="justify">Currently the Keyboard input class is available. Midi input class will be added in the future.</Text>
                </Container>

                <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Util Functions</Header>
                <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                    <Text align="justify">Dot offers a small set of utility function that make working with nodes easier.</Text>
                    <ListContainer>
                        <ListItem>chain(...nodes) - connects a series of nodes together (e.g. Dot.chain(synth, reverb, AC.destination))</ListItem>
                    </ListContainer>
                </Container>
            </Container>
        </FadeContainer>
    );
};

Overview.propTypes = {
    className: PropTypes.string,
};

Overview.defaultProps = {
    className: '',
};

export default Overview;

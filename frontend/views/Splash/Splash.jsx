import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'frontend/components/data';
import { Container } from 'frontend/components/layout';
import { Header, Link, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { FadeContainer } from 'frontend/views/views.styled';

const BASE_CLASS_NAME = 'Splash';

const installExample = `# Installing with npm
npm install dot-audio

# Installing with yarn
yarn add dot-audio`;

const importExample = `// Import in your project
import * as Dot from 'dot-audio'

// Import specific nodes
import { Synth, PingPongDelay, Keyboard } from 'dot-audio'`;

const Splash = ({ className }) => (
    <FadeContainer>
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Dot</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                <Text align="justify">
                    Dot is a simple web audio library for creating synthesizers and other real-time audio synthesis projects.
                </Text>
                <Text align="justify">
                    Dot provides a suite of nodes, util functions, and extras to help create amazing audio experiences.
                    Dot was designed to be lightweight and easy to use, while still providing enough to cover most common use-cases.
                </Text>
                <Text align="justify">
                    Dot takes a lot of inspiration from <Link href="https://github.com/Tonejs/Tone.js">Tone js</Link>. :p
                </Text>
                <Text align="justify">
                    <Link href="https://github.com/Kyle-Shanks/Dot">View Dot on Github</Link>
                </Text>
            </Container>

            <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Installation</Header>
            <Container margin={`0 0 ${SPACING.xl}`}>
                <Editor language="bash" content={installExample} />
            </Container>

            <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Import</Header>
            <Container margin={`0 0 ${SPACING.xl}`}>
                <Editor content={importExample} />
            </Container>
        </Container>
    </FadeContainer>
);

Splash.propTypes = {
    className: PropTypes.string,
};

Splash.defaultProps = {
    className: '',
};

export default Splash;

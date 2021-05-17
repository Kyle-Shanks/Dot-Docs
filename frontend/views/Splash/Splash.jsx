import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'frontend/components/data';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { FadeContainer } from 'frontend/views/views.styled';

const BASE_CLASS_NAME = 'Splash';

const Splash = ({ className }) => (
    <FadeContainer>
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Dot</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                <Text align="justify">
                    Dot is a simple web audio library for creating synthesizers and other real-time audio synthesis projects.
                </Text>
                <Text align="justify">
                    Dot provides a suite of useful nodes and extras to help create amazing audio experiences.
                    Dot was design to be lightweight and easy to use, while still providing enough to cover most common use-cases.
                    Dot takes a lot of inspiration from Tone js.
                </Text>
            </Container>

            <Header tag="h4" margin={`0 0 ${SPACING.m}`}>Installation</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.xl}`}>
                <Editor
                    language="bash"
                    content={'# Installing with npm\nnpm install dot-audio\n\n# Installing with yarn\nyarn add dot-audio'}
                />
                <Editor content={'// Import in your project\nimport * as Dot from \'dot-audio\''} />
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

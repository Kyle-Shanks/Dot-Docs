import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'SourcesOverview';

const SourcesOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Sources Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    Sources are the signal generation nodes used as a starting point to produce audible sound or signal to modify the parameters of other nodes.
                </Text>
                <Text align="justify">
                    All source nodes must be started manually to start producing signal, either with the ::start method or by passing the start property in the options for the constructor.
                </Text>
            </Container>
        </Container>
    );
};

SourcesOverview.propTypes = {
    className: PropTypes.string,
};

SourcesOverview.defaultProps = {
    className: '',
};

export default SourcesOverview;

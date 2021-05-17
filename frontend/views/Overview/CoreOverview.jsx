import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'CoreOverview';

const CoreOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Core Nodes Overview</Header>
            <Text margin={`0 0 ${SPACING.m}`} align="justify">
                The core nodes make up the fundamental building blocks for all other nodes and effects.
                DotAudioNode is the base class that all other nodes inherit from.
            </Text>
        </Container>
    );
};

CoreOverview.propTypes = {
    className: PropTypes.string,
};

CoreOverview.defaultProps = {
    className: '',
};

export default CoreOverview;

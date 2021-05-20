import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Link, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { CORE_PATH } from 'frontend/util/constants';

const BASE_CLASS_NAME = 'CoreOverview';

const CoreOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Core Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    The core nodes make up the fundamental building blocks for all other nodes and effects.
                </Text>
                <Text align="justify">
                    <Link path={`${CORE_PATH}/DotAudioNode`}>DotAudioNode</Link> is the base class that all other nodes inherit from.
                </Text>
            </Container>
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

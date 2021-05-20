import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'EffectsOverview';

const EffectsOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Effects Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    Effects are nodes that are used to modify or add texture and layers on top of the incoming signal. Adding that spice.
                </Text>
            </Container>
        </Container>
    );
};

EffectsOverview.propTypes = {
    className: PropTypes.string,
};

EffectsOverview.defaultProps = {
    className: '',
};

export default EffectsOverview;

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'InstrumentsOverview';

const InstrumentsOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Instruments Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    Instruments are a set of prebuilt nodes that can be used as building blocks for larger and more complex audio projects.
                </Text>
            </Container>
        </Container>
    );
};

InstrumentsOverview.propTypes = {
    className: PropTypes.string,
};

InstrumentsOverview.defaultProps = {
    className: '',
};

export default InstrumentsOverview;

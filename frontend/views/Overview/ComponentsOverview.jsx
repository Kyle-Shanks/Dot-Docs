import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'ComponentsOverview';

const ComponentsOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Components Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    Components are a collection of utility nodes that allow for param and signal manipulation.
                </Text>
            </Container>
        </Container>
    );
};

ComponentsOverview.propTypes = {
    className: PropTypes.string,
};

ComponentsOverview.defaultProps = {
    className: '',
};

export default ComponentsOverview;

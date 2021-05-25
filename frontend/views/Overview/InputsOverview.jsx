import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header, Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'InputsOverview';

const InputsOverview = ({ className }) => {
    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Header tag="h2" margin={`0 0 ${SPACING.l}`}>Inputs Overview</Header>
            <Container vGap={SPACING.m} margin={`0 0 ${SPACING.l}`}>
                <Text align="justify">
                    Input classes provide methods for the user to interact with audio projects.
                </Text>
            </Container>
        </Container>
    );
};

InputsOverview.propTypes = {
    className: PropTypes.string,
};

InputsOverview.defaultProps = {
    className: '',
};

export default InputsOverview;

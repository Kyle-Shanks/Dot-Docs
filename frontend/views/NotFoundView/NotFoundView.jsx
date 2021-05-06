import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'frontend/components/layout';
import { Header } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';

const BASE_CLASS_NAME = 'NotFoundView';

const NotFoundView = ({ className }) => (
    <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
        <Header tag="h2" margin={`0 0 ${SPACING.l}`}>404</Header>
    </Container>
);

NotFoundView.propTypes = {
    className: PropTypes.string,
};

NotFoundView.defaultProps = {
    className: '',
};

export default NotFoundView;

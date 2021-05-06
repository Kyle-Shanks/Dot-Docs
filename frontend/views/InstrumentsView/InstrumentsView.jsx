import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { INSTRUMENTS_PATH } from 'frontend/util/constants';
import InstrumentsOverview from './InstrumentsOverview';

const BASE_CLASS_NAME = 'InstrumentsView';

const InstrumentsView = ({ className }) => {
    const overviewMatch = useRouteMatch(INSTRUMENTS_PATH);
    const sectionMatch = useRouteMatch(`${INSTRUMENTS_PATH}/:section`);

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <InstrumentsOverview />}
                {sectionMatch && sectionMatch.isExact && <Text>{sectionMatch.params.section}</Text>}
                <Text>Cannot find instruments page</Text>
            </Switch>
        </Container>
    );
};

InstrumentsView.propTypes = {
    className: PropTypes.string,
};

InstrumentsView.defaultProps = {
    className: '',
};

export default InstrumentsView;

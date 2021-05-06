import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { CORE_PATH } from 'frontend/util/constants';
import CoreOverview from './CoreOverview';

const BASE_CLASS_NAME = 'CoreView';

const CoreView = ({ className }) => {
    const overviewMatch = useRouteMatch(CORE_PATH);
    const sectionMatch = useRouteMatch(`${CORE_PATH}/:section`);

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <CoreOverview />}
                {sectionMatch && sectionMatch.isExact && <Text>{sectionMatch.params.section}</Text>}
                <Text>Cannot find core page</Text>
            </Switch>
        </Container>
    );
};

CoreView.propTypes = {
    className: PropTypes.string,
};

CoreView.defaultProps = {
    className: '',
};

export default CoreView;

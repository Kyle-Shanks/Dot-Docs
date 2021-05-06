import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { EFFECTS_PATH } from 'frontend/util/constants';
import EffectsOverview from './EffectsOverview';

const BASE_CLASS_NAME = 'EffectsView';

const EffectsView = ({ className }) => {
    const overviewMatch = useRouteMatch(EFFECTS_PATH);
    const sectionMatch = useRouteMatch(`${EFFECTS_PATH}/:section`);

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <EffectsOverview />}
                {sectionMatch && sectionMatch.isExact && <Text>{sectionMatch.params.section}</Text>}
                <Text>Cannot find effects page</Text>
            </Switch>
        </Container>
    );
};

EffectsView.propTypes = {
    className: PropTypes.string,
};

EffectsView.defaultProps = {
    className: '',
};

export default EffectsView;

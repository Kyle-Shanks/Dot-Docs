import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { COMPONENTS_PATH } from 'frontend/util/constants';
import ComponentsOverview from './ComponentsOverview';

const BASE_CLASS_NAME = 'ComponentsView';

const ComponentsView = ({ className }) => {
    const overviewMatch = useRouteMatch(COMPONENTS_PATH);
    const sectionMatch = useRouteMatch(`${COMPONENTS_PATH}/:section`);

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <ComponentsOverview />}
                {sectionMatch && sectionMatch.isExact && <Text>{sectionMatch.params.section}</Text>}
                <Text>Cannot find components page</Text>
            </Switch>
        </Container>
    );
};

ComponentsView.propTypes = {
    className: PropTypes.string,
};

ComponentsView.defaultProps = {
    className: '',
};

export default ComponentsView;

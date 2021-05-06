import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Container } from 'frontend/components/layout';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import { SOURCES_PATH } from 'frontend/util/constants';
import SourcesOverview from './SourcesOverview';

const BASE_CLASS_NAME = 'SourcesView';

const SourcesView = ({ className }) => {
    const overviewMatch = useRouteMatch(SOURCES_PATH);
    const sectionMatch = useRouteMatch(`${SOURCES_PATH}/:section`);

    return (
        <Container className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <SourcesOverview />}
                {sectionMatch && sectionMatch.isExact && <Text>{sectionMatch.params.section}</Text>}
                <Text>Cannot find sources page</Text>
            </Switch>
        </Container>
    );
};

SourcesView.propTypes = {
    className: PropTypes.string,
};

SourcesView.defaultProps = {
    className: '',
};

export default SourcesView;

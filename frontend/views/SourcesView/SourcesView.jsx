import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import sourcesData from 'frontend/docs/sourcesData.json';
import { SPACING } from 'frontend/styles/constants';
import { SOURCES_PATH } from 'frontend/util/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';
import SourcesOverview from './SourcesOverview';

const BASE_CLASS_NAME = 'SourcesView';

const SourcesView = ({ className, resetScroll }) => {
    const overviewMatch = useRouteMatch(SOURCES_PATH);
    const sectionMatch = useRouteMatch(`${SOURCES_PATH}/:section`);

    const getData = (name) => sourcesData.find(datum => datum.name === name);

    useEffect(resetScroll, [overviewMatch, sectionMatch]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <SourcesOverview />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView key={sectionMatch.params.section} data={getData(sectionMatch.params.section)} />
                )}
                <Text>Cannot find sources page</Text>
            </Switch>
        </StyledContainer>
    );
};

SourcesView.propTypes = {
    className: PropTypes.string,
    resetScroll: PropTypes.func.isRequired,
};

SourcesView.defaultProps = {
    className: '',
};

export default SourcesView;

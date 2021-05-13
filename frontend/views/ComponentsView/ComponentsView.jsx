import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import componentsData from 'frontend/docs/componentsData.json';
import { SPACING } from 'frontend/styles/constants';
import { COMPONENTS_PATH } from 'frontend/util/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';
import ComponentsOverview from './ComponentsOverview';

const BASE_CLASS_NAME = 'ComponentsView';

const ComponentsView = ({ className, resetScroll }) => {
    const overviewMatch = useRouteMatch(COMPONENTS_PATH);
    const sectionMatch = useRouteMatch(`${COMPONENTS_PATH}/:section`);

    const getData = (name) => componentsData.find(datum => datum.name === name);

    useEffect(resetScroll, [overviewMatch, sectionMatch]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <ComponentsOverview />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView key={sectionMatch.params.section} data={getData(sectionMatch.params.section)} />
                )}
                <Text>Cannot find components page</Text>
            </Switch>
        </StyledContainer>
    );
};

ComponentsView.propTypes = {
    className: PropTypes.string,
    resetScroll: PropTypes.func.isRequired,
};

ComponentsView.defaultProps = {
    className: '',
};

export default ComponentsView;

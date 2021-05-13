import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import coreData from 'frontend/docs/coreData.json';
import { SPACING } from 'frontend/styles/constants';
import { CORE_PATH } from 'frontend/util/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';
import CoreOverview from './CoreOverview';

const BASE_CLASS_NAME = 'CoreView';

const CoreView = ({ className, resetScroll }) => {
    const overviewMatch = useRouteMatch(CORE_PATH);
    const sectionMatch = useRouteMatch(`${CORE_PATH}/:section`);

    const getData = (name) => coreData.find(datum => datum.name === name);

    useEffect(resetScroll, [overviewMatch, sectionMatch]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <CoreOverview />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView key={sectionMatch.params.section} data={getData(sectionMatch.params.section)} />
                )}
                <Text>Cannot find core page</Text>
            </Switch>
        </StyledContainer>
    );
};

CoreView.propTypes = {
    className: PropTypes.string,
    resetScroll: PropTypes.func.isRequired,
};

CoreView.defaultProps = {
    className: '',
};

export default CoreView;

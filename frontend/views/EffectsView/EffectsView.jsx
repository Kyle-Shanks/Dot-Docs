import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import effectsData from 'frontend/docs/effectsData.json';
import { SPACING } from 'frontend/styles/constants';
import { EFFECTS_PATH } from 'frontend/util/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';
import EffectsOverview from './EffectsOverview';

const BASE_CLASS_NAME = 'EffectsView';

const EffectsView = ({ className, resetScroll }) => {
    const overviewMatch = useRouteMatch(EFFECTS_PATH);
    const sectionMatch = useRouteMatch(`${EFFECTS_PATH}/:section`);

    const getData = (name) => effectsData.find(datum => datum.name === name);

    useEffect(resetScroll, [overviewMatch, sectionMatch]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <EffectsOverview />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView key={sectionMatch.params.section} data={getData(sectionMatch.params.section)} />
                )}
                <Text>Cannot find effects page</Text>
            </Switch>
        </StyledContainer>
    );
};

EffectsView.propTypes = {
    className: PropTypes.string,
    resetScroll: PropTypes.func.isRequired,
};

EffectsView.defaultProps = {
    className: '',
};

export default EffectsView;

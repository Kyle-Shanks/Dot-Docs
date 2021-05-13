import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import instrumentsData from 'frontend/docs/instrumentsData.json';
import { SPACING } from 'frontend/styles/constants';
import { INSTRUMENTS_PATH } from 'frontend/util/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';
import InstrumentsOverview from './InstrumentsOverview';

const BASE_CLASS_NAME = 'InstrumentsView';

const InstrumentsView = ({ className, resetScroll }) => {
    const overviewMatch = useRouteMatch(INSTRUMENTS_PATH);
    const sectionMatch = useRouteMatch(`${INSTRUMENTS_PATH}/:section`);

    const getData = (name) => instrumentsData.find(datum => datum.name === name);

    useEffect(resetScroll, [overviewMatch, sectionMatch]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <InstrumentsOverview />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView key={sectionMatch.params.section} data={getData(sectionMatch.params.section)} />
                )}
                <Text>Cannot find instruments page</Text>
            </Switch>
        </StyledContainer>
    );
};

InstrumentsView.propTypes = {
    className: PropTypes.string,
    resetScroll: PropTypes.func.isRequired,
};

InstrumentsView.defaultProps = {
    className: '',
};

export default InstrumentsView;

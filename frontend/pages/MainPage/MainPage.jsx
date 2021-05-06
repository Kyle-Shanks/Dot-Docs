import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Flex } from 'frontend/components/layout';
import Sidebar from 'frontend/compounds/Sidebar';
import {
    SPLASH_PATH,
    OVERVIEW_PATH,
    EXAMPLES_PATH,
    COMPONENTS_PATH,
    CORE_PATH,
    EFFECTS_PATH,
    INSTRUMENTS_PATH,
    SOURCES_PATH,
} from 'frontend/util/constants';
import {
    Examples,
    Overview,
    Splash,
    ComponentsView,
    CoreView,
    EffectsView,
    InstrumentsView,
    SourcesView,
    NotFoundView,
} from 'frontend/views';
import { MainContent } from './MainPage.styled';

const BASE_CLASS_NAME = 'MainPage';

// TODO: Need to add views for types and inputs

const MainPage = ({ className, theme, toggleTheme }) => {
    const splashMatch = useRouteMatch(SPLASH_PATH);
    const overviewMatch = useRouteMatch(OVERVIEW_PATH);
    const examplesMatch = useRouteMatch(EXAMPLES_PATH);
    const componentsMatch = useRouteMatch(COMPONENTS_PATH);
    const coreMatch = useRouteMatch(CORE_PATH);
    const sourcesMatch = useRouteMatch(SOURCES_PATH);
    const instrumentsMatch = useRouteMatch(INSTRUMENTS_PATH);
    const effectsMatch = useRouteMatch(EFFECTS_PATH);

    return (
        <Flex className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
            <MainContent>
                <Switch>
                    {splashMatch && splashMatch.isExact && <Splash />}
                    {overviewMatch && overviewMatch.isExact && <Overview />}
                    {examplesMatch && examplesMatch.isExact && <Examples />}
                    {coreMatch && <CoreView />}
                    {componentsMatch && <ComponentsView />}
                    {sourcesMatch && <SourcesView />}
                    {instrumentsMatch && <InstrumentsView />}
                    {effectsMatch && <EffectsView />}
                    <NotFoundView />
                </Switch>
            </MainContent>
        </Flex>
    );
};

MainPage.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
    className: '',
};

export default withRouter(MainPage);

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Box } from 'frontend/components/layout';
import Sidebar from 'frontend/compounds/Sidebar';
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

const MainPage = ({ className, theme, toggleTheme }) => {
    const splashMatch = useRouteMatch('/');
    const overviewMatch = useRouteMatch('/overview');
    const examplesMatch = useRouteMatch('/examples');
    const componentsMatch = useRouteMatch('/components/:section');
    const coreMatch = useRouteMatch('/core/:section');
    const sourcesMatch = useRouteMatch('/sources/:section');
    const instrumentsMatch = useRouteMatch('/instruments/:section');
    const effectsMatch = useRouteMatch('/effects/:section');

    return (
        <Box className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
            <MainContent>
                <Switch>
                    {splashMatch && splashMatch.isExact && <Splash />}
                    {overviewMatch && overviewMatch.isExact && <Overview />}
                    {examplesMatch && examplesMatch.isExact && <Examples />}
                    {coreMatch && coreMatch.isExact && <CoreView />}
                    {componentsMatch && componentsMatch.isExact && <ComponentsView />}
                    {sourcesMatch && sourcesMatch.isExact && <SourcesView />}
                    {instrumentsMatch && instrumentsMatch.isExact && <InstrumentsView />}
                    {effectsMatch && effectsMatch.isExact && <EffectsView />}
                    <NotFoundView />
                </Switch>
            </MainContent>
        </Box>
    );
};

MainPage.propTypes = {
    className: PropTypes.string,
};

MainPage.defaultProps = {
    className: '',
};

export default withRouter(MainPage);

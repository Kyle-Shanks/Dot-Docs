import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Flex } from 'frontend/components/layout';
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

// TODO: Need to add views for types and inputs

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
        <Flex className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
            <MainContent>
                <Switch>
                    {splashMatch && splashMatch.isExact && <Splash />}
                    {overviewMatch && overviewMatch.isExact && <Overview />}
                    {examplesMatch && examplesMatch.isExact && <Examples />}
                    {coreMatch && coreMatch.isExact && (
                        <CoreView section={coreMatch.params.section} />
                    )}
                    {componentsMatch && componentsMatch.isExact && (
                        <ComponentsView section={componentsMatch.params.section} />
                    )}
                    {sourcesMatch && sourcesMatch.isExact && (
                        <SourcesView section={sourcesMatch.params.section} />
                    )}
                    {instrumentsMatch && instrumentsMatch.isExact && (
                        <InstrumentsView section={instrumentsMatch.params.section} />
                    )}
                    {effectsMatch && effectsMatch.isExact && (
                        <EffectsView section={effectsMatch.params.section} />
                    )}
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

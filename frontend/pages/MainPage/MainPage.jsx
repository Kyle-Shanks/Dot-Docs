import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Flex } from 'frontend/components/layout';
import Sidebar from 'frontend/compounds/Sidebar';
import { componentsData, coreData, effectsData, instrumentsData, sourcesData } from 'frontend/docs';
import Examples from 'frontend/views/Examples';
import Splash from 'frontend/views/Splash';
import SectionView from 'frontend/views/SectionView';
import NotFoundView from 'frontend/views/NotFoundView';
import {
    Overview,
    ComponentsOverview,
    CoreOverview,
    EffectsOverview,
    InstrumentsOverview,
    SourcesOverview,
} from 'frontend/views/Overview';
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
import { MainContent } from './MainPage.styled';

const BASE_CLASS_NAME = 'MainPage';

// TODO: Need to add views for types and inputs

const MainPage = ({ className, theme, toggleTheme }) => {
    const contentContainer = useRef();
    const splashMatch = useRouteMatch(SPLASH_PATH);
    const overviewMatch = useRouteMatch(OVERVIEW_PATH);
    const examplesMatch = useRouteMatch(EXAMPLES_PATH);
    const componentsMatch = useRouteMatch(COMPONENTS_PATH);
    const coreMatch = useRouteMatch(CORE_PATH);
    const sourcesMatch = useRouteMatch(SOURCES_PATH);
    const instrumentsMatch = useRouteMatch(INSTRUMENTS_PATH);
    const effectsMatch = useRouteMatch(EFFECTS_PATH);

    const resetScroll = () => {
        contentContainer.current.scrollTop = 0;
    };

    return (
        <Flex className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Sidebar theme={theme} toggleTheme={toggleTheme} />
            <MainContent ref={contentContainer}>
                <Switch>
                    {splashMatch && splashMatch.isExact && <Splash resetScroll={resetScroll} />}
                    {overviewMatch && overviewMatch.isExact && <Overview resetScroll={resetScroll} />}
                    {examplesMatch && examplesMatch.isExact && <Examples resetScroll={resetScroll} />}

                    {componentsMatch && (
                        <SectionView
                            className="ComponentsVieOverv"
                            data={componentsData}
                            path={COMPONENTS_PATH}
                            OverviewComponent={ComponentsOverview}
                            resetScroll={resetScroll}
                        />
                    )}
                    {coreMatch && (
                        <SectionView
                            className="CoreView"
                            data={coreData}
                            path={CORE_PATH}
                            OverviewComponent={CoreOverview}
                            resetScroll={resetScroll}
                        />
                    )}
                    {sourcesMatch && (
                        <SectionView
                            className="SourcesView"
                            data={sourcesData}
                            path={SOURCES_PATH}
                            OverviewComponent={SourcesOverview}
                            resetScroll={resetScroll}
                        />
                    )}
                    {instrumentsMatch && (
                        <SectionView
                            className="InstrumentsView"
                            data={instrumentsData}
                            path={INSTRUMENTS_PATH}
                            OverviewComponent={InstrumentsOverview}
                            resetScroll={resetScroll}
                        />
                    )}
                    {effectsMatch && (
                        <SectionView
                            className="EffectsView"
                            data={effectsData}
                            path={EFFECTS_PATH}
                            OverviewComponent={EffectsOverview}
                            resetScroll={resetScroll}
                        />
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

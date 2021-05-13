import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import ClassView from 'frontend/views/ClassView';
import { StyledContainer } from 'frontend/views/views.styled';

const BASE_CLASS_NAME = 'SectionView';

const SectionView = ({ className, data, OverviewComponent, path, resetScroll }) => {
    const overviewMatch = useRouteMatch(path);
    const sectionMatch = useRouteMatch(`${path}/:section`);
    const [section, setSection] = useState(null);

    const getData = (name) => data.find(datum => datum.name === name);

    useEffect(() => {
        if (overviewMatch && overviewMatch.isExact) {
            setSection('overview');
        } else if (sectionMatch && sectionMatch.isExact) {
            setSection(sectionMatch.params.section);
        }
    }, [overviewMatch, sectionMatch]);

    useEffect(resetScroll, [section]);

    return (
        <StyledContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
            <Switch>
                {overviewMatch && overviewMatch.isExact && <OverviewComponent />}
                {sectionMatch && sectionMatch.isExact && (
                    <ClassView
                        key={sectionMatch.params.section}
                        data={getData(sectionMatch.params.section)}
                    />
                )}
                <Text>Cannot find page</Text>
            </Switch>
        </StyledContainer>
    );
};

SectionView.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(Object).isRequired,
    OverviewComponent: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    resetScroll: PropTypes.func.isRequired,
};

SectionView.defaultProps = {
    className: '',
};

export default SectionView;

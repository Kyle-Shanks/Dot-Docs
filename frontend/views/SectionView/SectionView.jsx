import React from 'react';
import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Text } from 'frontend/components/typography';
import { SPACING } from 'frontend/styles/constants';
import ClassView from 'frontend/views/ClassView';
import { FadeContainer } from 'frontend/views/views.styled';

const BASE_CLASS_NAME = 'SectionView';

const SectionView = ({ className, data, OverviewComponent, path }) => {
    const overviewMatch = useRouteMatch(path);
    const sectionMatch = useRouteMatch(`${path}/:section`);

    const getData = (name) => data.find(datum => datum.name === name);

    return (
        <FadeContainer className={`${BASE_CLASS_NAME} ${className}`.trim()} padding={SPACING.l}>
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
        </FadeContainer>
    );
};

SectionView.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(Object).isRequired,
    OverviewComponent: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
};

SectionView.defaultProps = {
    className: '',
};

export default SectionView;

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box } from 'frontend/components/layout';
import Splash from 'frontend/views/Splash';
import Sidebar from 'frontend/compounds/Sidebar';
import { MainContent } from './MainPage.styled';

const BASE_CLASS_NAME = 'MainPage';

const MainPage = ({ className, toggleTheme }) => {
    return (
        <Box className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <Sidebar />
            <MainContent>
                <Splash toggleTheme={toggleTheme} />
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

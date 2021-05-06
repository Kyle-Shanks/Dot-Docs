import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from 'frontend/pages/MainPage';
import { GlobalStyles } from 'frontend/styles/globalStyles';
import { THEMES, LIGHT, DARK } from 'frontend/styles/themes';

const Root = () => {
    const [theme, setTheme] = useState(LIGHT);
    const toggleTheme = () => (theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT));

    return (
        <Router>
            <ThemeProvider theme={THEMES[theme]}>
                <GlobalStyles />
                <MainPage theme={theme} toggleTheme={toggleTheme} />
            </ThemeProvider>
        </Router>
    );
};

export default Root;

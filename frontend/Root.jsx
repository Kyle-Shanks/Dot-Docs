import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainPage from 'frontend/pages/MainPage';
import { GlobalStyles } from 'frontend/styles/globalStyles';
import { THEMES, LIGHT, DARK } from 'frontend/styles/themes';

const THEME_KEY = 'DotDocs-Theme';

const Root = () => {
    const [theme, setTheme] = useState(localStorage.getItem(THEME_KEY) || LIGHT);

    const toggleTheme = () => {
        const newTheme = theme === LIGHT ? DARK : LIGHT;
        localStorage.setItem(THEME_KEY, newTheme);
        setTheme(newTheme);
    };

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

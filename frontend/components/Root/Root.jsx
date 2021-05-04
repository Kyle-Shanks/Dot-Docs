import React, { useState } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Test from 'frontend/components/Test'
import { GlobalStyles } from 'frontend/styles/globalStyles'
import { THEMES, LIGHT, DARK } from 'frontend/styles/themes'

const Root = () => {
    const [theme, setTheme] = useState(LIGHT)
    const toggleTheme = () => (theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT))

    return (
        <Router>
            <ThemeProvider theme={THEMES[theme]}>
                <GlobalStyles />
                <Test toggleTheme={toggleTheme} />
            </ThemeProvider>
        </Router>
    )
}

export default Root

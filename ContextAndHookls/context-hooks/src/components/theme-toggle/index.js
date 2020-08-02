import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <button style={{ background: theme.ui, color: theme.syntax  }} onClick={toggleTheme}>Toggle the theme</button>
    )

}

export default ThemeToggle; 
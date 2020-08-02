import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';
import { SongContext } from '../../contexts/SongContext';

const Navbar = () => {
    const { songs } = useContext(SongContext)
    // const { isAuth, changeAuth } = useContext(AuthContext);
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    return (
        <nav className="navbar">
            <h1>Songs List</h1>
            <p>Currently you have {songs.length} songs to listen</p>
            {/* <button onClick={changeAuth}>{isAuth ? 'Logged In' : 'Logged Out'}</button> */}
        </nav>
    )
}

export default Navbar;
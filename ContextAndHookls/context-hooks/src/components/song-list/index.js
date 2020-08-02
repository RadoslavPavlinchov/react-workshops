import React, { useContext } from 'react';
// import { ThemeContext } from '../../contexts/ThemeContext';
import { SongContext } from '../../contexts/SongContext';
// import ThemeToggle from '../theme-toggle';
import SongDetails from '../song-details'

const SongList = () => {
    const { songs } = useContext(SongContext);
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    return songs.length ? (
        <div className="song-list">
            <ul>
                {songs.map(({title, artist, id}) => {
                    return (<SongDetails title={title} artist={artist} key={id} id={id}/>)
                })}
            </ul>
          {/* <ThemeToggle /> */}

        </div>
    ) : (
        <div className="empty">
            You do not have anything added so far
        </div>
    )
}

export default SongList;
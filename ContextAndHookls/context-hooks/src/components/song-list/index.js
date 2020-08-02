import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateSongForm from '../create-song-form';

const SongList = () => {
    const [songs, setSongs] = useState([
        {
            title: 'Never Look Back',
            artist: 'Run The Jewels',
            id: 1
        },
        {
            title: 'Nobody Speak',
            artist: 'Run The Jewels',
            id: 2
        },
        {
            title: 'Legend Has It',
            artist: 'Run The Jewels',
            id: 3
        }
    ])

    const addSong = (title, artist) => {
        setSongs([...songs, { title, artist, id: uuidv4() }])
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>

            <CreateSongForm addSong={addSong}/>

        </div>
    )
}

export default SongList;
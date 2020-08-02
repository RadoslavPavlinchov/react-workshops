import React, { useState, useEffect } from 'react';

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
    ]);

    const [age, setAge] = useState(20)

    const addSong = (title, artist) => {
        setSongs([...songs, { title, artist, id: uuidv4() }])
    }

    useEffect(() => {
        console.log('useEffect hook ran', songs)
    }, [songs]);

    useEffect(() => {
        console.log('useEffect hook ran', age)
    }, [age]);

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>

            <CreateSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;
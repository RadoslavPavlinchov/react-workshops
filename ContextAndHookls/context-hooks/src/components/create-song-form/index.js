import React, { useState, useContext } from 'react';
import { SongContext } from '../../contexts/SongContext';

const CreateSongForm = () => {
    const { dispatch } = useContext(SongContext);

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_SONG', song: {
            title, 
            artist
        }})
        setArtist('');
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Song name:</label>
                <input
                    type="text"
                    placeholder="Song Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Artist:</label>
                <input
                    type="text"
                    placeholder="Artist"
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </div>

            <div>
                <button type="submit">Add Song</button>
            </div>
        </form>
    )
}

export default CreateSongForm;
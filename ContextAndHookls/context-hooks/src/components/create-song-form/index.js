import React, { useState } from 'react';

const CreateSongForm = ( {addSong} ) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title, artist)
        setArtist('');
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Song name:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Artist:</label>
                <input
                    type="text"
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </div>

            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}

export default CreateSongForm;
import React, { useContext } from 'react';
import { SongContext } from '../../contexts/SongContext';

const SongDetails = ({ artist, title, id }) => {
    const { dispatch } = useContext(SongContext);

    return(
        <li onClick={() => dispatch({type: 'REMOVE_SONG', id})}>
            <div className="artist">{artist}</div>
            <div className="title">{title} </div>
        </li>
    )
}

export default SongDetails;
import { v4 as uuidv4 } from 'uuid';

export const songReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, {
                title: action.song.title,
                artist: action.song.artist,
                id: uuidv4()
            }]
        case 'REMOVE_SONG':
            return state.filter(song => action.id !== song.id)
        default: 
        return state
    }
}
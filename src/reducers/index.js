import {combineReducers} from "redux";

// Create Reducers

const songsReducer = () => {
    return [

        {
            title: "011 Is a Joke",
            duration: "00:04:03"
        },
        {
            title: "Barbie Girld",
            duration: "00:03:04"
        },

        {
            title: "Karma Chameleon",
            duration: "00:02:33"
        },
        {
            title: "Hello",
            duration: "00:05:03"
        },
        {
            title: "Song 2",
            duration: "00:02:00"
        }
    ];
};


// Reducer
// initial state = null
const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// combine the reducers together
// setting the songs from songReducer obj
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})



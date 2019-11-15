// Action Creator

// plain function which return an object with type and payload
export const selectSong = (song) => {

    return {
        type: "SONG_SELECTED",
        payload: song,
    };
    
};
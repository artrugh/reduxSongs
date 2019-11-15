import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Please select a song</div>
    } else {
        return (
            <div>
                <h3>Details For:</h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        );
    }
};

// setting the props using the state/reducer
const mapStateToProps = state => {
    return {
        song: state.selectedSong
    };
};

// connect the action with the component
export default connect(mapStateToProps)(SongDetail);
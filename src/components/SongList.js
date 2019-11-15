import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions/index"

class SongList extends React.Component {
    renderList() {
        return this.props.song.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSongs(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// setting the props from the state/reducer
const mapStateToProps = state => {
    return { song: state.songs };
    // setting the song
    //props in the component got it from state songs (take a look at the reducer)
};

// setting the props from the imported action
const mapDispatchToProps = {
    selectSongs: selectSong
};

//connecting the actions and reducers to the component
export default connect(
    mapStateToProps,
    mapDispatchToProps        
    )(SongList);
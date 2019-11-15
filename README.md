React-Redux Basic

Simple example using Redux in React.

instead of setting the state as usual, we use a library names REDUX
in this case REACT-REDUX

It allows us to set the state in functions (class object are not more needed).

For that we need basically 3 elements:

1.ACTIONS
2.REDUCERS
3.STORAGE

1.REDUCERS are actions.
Let's say that it is a order, DO THAT PLEASE!
So plain functions with, comonly, an single argument and return an object with two values (type: x, payload: z).

example:

const selectSong = (song) => {

    return {
        type: "SONG_SELECTED",
        payload: song,
    };
    
};

2.REDUCERS are the guys who take the orders, let's think of a call center. They are in between the actions and the store. And they care about the type of order. they simply as the action guys: What do you want? What kind of order do you have?

So, tecnically they are also plain functions with two argument:
1- an initial state
2- an action

they return the payload from the action (the song) or the initial state(null).

example:

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

we can also combine easily reducers, setting them in an object.

xport default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})


*there are more complex reducers, what let's keep it simple for now.

3.STOREGE.
Is the brain and the last part of the chain.
It is usually set it in the app, like this.

-remember to import:

createStore from redux
reducer from reducer
provider from react-redux  

const store = createStore(reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>)

/-------------------/-------------------/-------------------/-------------------/

* Last but not least

In react when we use the actions and the state from the reducers as props, we need to set them. How? let's see.


setting the props from the state/reducer
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

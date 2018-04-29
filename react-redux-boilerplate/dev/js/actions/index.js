export const selectUser = (user) => dispatch => {
    console.log("You clicked on user: ", user.first);
    dispatch({
        type: 'USER_SELECTED',
        payload: user
    })
};

export const fetchData = () => dispatch => {

    dispatch({
        type: 'DATA_FETCHED',
        payload: 'chicken'
    })
}
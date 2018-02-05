export const asyncAction = () => async dispatch => {
	//AsyncStorage is the same as Local Storage. example:
	//AsyncStorage.setItem('myItem', myItem)
	//AsyncStorage.getItem('myItem')

	let item = await AsyncStorage.getItem("myItem");

	if (item) {
		//Dispatch an action
		dispatch({ type: ITEM_RECEIVED, payload: item });
	} else {
		//do smth else
	}
};

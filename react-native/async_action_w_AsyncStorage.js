//AsyncStorage is the same as Local Storage. it returns a promise. example:
//await AsyncStorage.setItem('myItem', myItem)
//await AsyncStorage.getItem('myItem')

export const asyncAction = () => async dispatch => {
	let token = await AsyncStorage.getItem("fb_token");

	if (token) {
		//Dispatch an action
		dispatch({ type: LOGIN_SUCCESS, payload: token });
	} else {
		doLogin(dispatch);
	}
};

//this callback is not a separate action creator it is part of asynAction but dispatch still has to be passed for an async request inside of the callback function
const doLogin = async dispatch => {
	//facebook example
	let { type, token } = await Facebook.logInWithReasPermissions("someUserId", {
		permissions: ["public_profile"]
	});

	if (type === "cancel") {
		return dispatch({ type: LOGIN_FAIL });
	}

	await AsyncStorage.setItem("fb_token", token);
	//if setItem fails we won't despatch the action
	dispatch({ type: LOGIN_SUCESS, payload: token });
};

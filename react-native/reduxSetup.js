import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//reducers/index.js
const reducers = combineReducers({
	auth: () => {
		return {};
	}
});

//store/index.js
const store = createStore(
	reducers, //first argument is the reducers
	{}, //second argument is the initial state of the store
	compose(applyMiddleware(thunk))
	//third argument is store enhancers. the only enhancer that ships with redux is applyMiddleware. compose is used to bundle together multiple enhancers
);

//import reducers to store. import store to App.js, wrap the return with <Provider stor={store}>...</Provider> from 'react-redux'

export default store;

// in actions/index.js:
// export * from './auth_actions';
// export * from './other_actions';
//
// than import * as actions from '../actions'
// import { connect } from 'react-redux'
//
// function mapStateToProps({ auth }) {
//   return { token: auth.token };
// }
//
// export default connect(mapStateToProps, actions)(AuthScreen);

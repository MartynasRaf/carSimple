import { AsyncStorage } from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import CarsAPI from '../api/CarsAPI';
//import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', login: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'signout':
			return { login: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = (dispatch) => async () => {
	/*
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('Signup');
	}
	*/
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ username, password, phone, email }) => {
	try {
		const response = await CarsAPI.post('/api/users/new', {
			username,
			password,
			phone,
			email,
			likedAds: [],
		});
		//await AsyncStorage.setItem('login', { username, password });
		dispatch({ type: 'signin', payload: { username, password } });

		//navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with sign up',
		});
	}
};

const signin = (dispatch) => async ({ username, password }) => {
	try {
		const response = await CarsAPI.get(`/api/users/${username}`, {
			auth: {
				username,
				password, // Test login
			},
		});
		/*
		await AsyncStorage.setItem(
			'login',
			JSON.stringify({ username, password })
		);*/
		dispatch({ type: 'signin', payload: { username, password } });
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with sign in',
		});
	}

	/* Left here as an example
	try {
		const response = await trackerAPI.post('/signin', {
			username,
			password,
		});
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with sign in',
		});
	}
	*/
};

const signout = (dispatch) => async () => {
	//await AsyncStorage.removeItem('login');
	dispatch({ type: 'signout' });

	//navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignin },
	{ login: null, errorMessage: '' }
);
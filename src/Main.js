import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class Main extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCEjeZozE413gzJyXP77OsESQHq3MgWO4E',
            authDomain: 'materialstock-f28a1.firebaseapp.com',
            databaseURL: 'https://materialstock-f28a1.firebaseio.com',
            projectId: 'materialstock-f28a1',
            storageBucket: 'materialstock-f28a1.appspot.com',
            messagingSenderId: '15106732968'
          });
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />    
            </Provider>
        );
    }
}

export default Main;  
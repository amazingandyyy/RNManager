import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDaVjsjoFx8UkSxO9dVIW5LeDDJ_gAeUNM',
      authDomain: 'rnmanager-40b63.firebaseapp.com',
      databaseURL: 'https://rnmanager-40b63.firebaseio.com',
      storageBucket: 'rnmanager-40b63.appspot.com',
      messagingSenderId: '537008778833'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.viewStyle}>
            <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = {
    // viewStyle: {
    //     justContent: 'center',
    //     flex: 1,
    //     flexDirection: 'row'
    // }
};

export default App;

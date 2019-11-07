import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Offline
import * as serviceWorker from './serviceWorker';

import Rutas from './rutas';
// Importar Firebase
import firebase from "firebase/app";
import 'firebase/installations';

firebase.initializeApp({
    apiKey: "AIzaSyCCAdkLuNTdZnwLm_-I4iF5LXCe2RKRd1U",
    authDomain: "sistema-ventas-dde3f.firebaseapp.com",
    databaseURL: "https://sistema-ventas-dde3f.firebaseio.com",
    projectId: "sistema-ventas-dde3f",
    storageBucket: "",
    messagingSenderId: "1087202934624",
    appId: "1:1087202934624:web:d0a8d90423442838"
});

class App extends Component {

    state = {
        user: null,
    }

    UNSAFE_componentWillMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
            this.setState({ user });
            console.log(user);
        });
    }

    render() {
        return (
            <Rutas user={this.state.user}></Rutas>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

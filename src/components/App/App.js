import React, { Component } from 'react';
import styles from './App.css'
import 'normalize.css'

class App extends Component {
    render() {
        return (
            <div>
               <h1 className={styles.heading}>Hi from React</h1>
            </div>
        );
    }
}

export default App;
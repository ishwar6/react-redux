import React, { Component } from 'react';
import Notes from './components/notes';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configurationStore';

const store = configureStore();

// You can also pass in an initialState here


class App extends Component {
render() {
  return (
 <Provider store = {store}>
    <Notes />
  </Provider>
  )
}

}


export default App;

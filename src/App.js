import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './components/store'
import Header from './components/header/header'
import BodyContent from './components/mainBody/MainBodyContents';
import SearchBar from './components/searchComponent/searchCompBody'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
      <SearchBar/>
      <BodyContent />
      </div>
    </Provider>
    
  );
}

export default App;

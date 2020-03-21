import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './components/store'
import Header from './components/header/header'
import BodyContent from './components/mainBody/MainBodyContents';
import SearchBar from './components/searchComponent/searchCompBody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <SearchBar />
          <Switch>

            <Route path="/" exact component={BodyContent} />

          </Switch>
          <BodyContent />
        </div>
      </Router>

    </Provider>

  );
}

export default App;

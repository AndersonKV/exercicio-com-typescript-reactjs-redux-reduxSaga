import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import RepositoriyList from './components/RepositoryList';
import store from './store';

const App = () => <Provider store={store}><div className="App"><RepositoriyList /></div></Provider>;

export default App;
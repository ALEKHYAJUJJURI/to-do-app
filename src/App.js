import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App container-fluid">
       <div className='row'>
       <h1 className='fw-bold text-primary main-heading text-center'>To-Do App</h1>
        <TaskInput />
        <TaskList />
       </div>
      </div>
    </Provider>
  );
};


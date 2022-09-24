import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
  contacts:[{name:"James Smith",number: 123123},{ name:"Thomas Anderson",number:123123}, {name:"Bruce Wayne",number:123123}]
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);
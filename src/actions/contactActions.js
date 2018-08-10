import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  SORT_CONTACTS_ASC,
  SORT_CONTACTS_DESC
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

// kasowanie dodanego elementu nie zadziała, bo to fejkowe API, trzeba zrobić try & catch

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};

export const sortContacts = sortType => dispatch => {
  if (sortType === 'asc') {
    dispatch({
      type: SORT_CONTACTS_ASC,
      payload: sortType
    });
  } else if (sortType === 'desc') {
    dispatch({
      type: SORT_CONTACTS_DESC,
      payload: sortType
    });
  }
};

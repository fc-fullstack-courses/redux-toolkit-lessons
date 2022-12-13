import axios from 'axios';

export const getUsers = async () =>
  axios.get('http://localhost:5000/api/users');

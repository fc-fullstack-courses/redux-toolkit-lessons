import axios from 'axios';

export const getUsers = async () =>
  axios.get('http://localhost:5000/api/users');

export const registerUser = async (userData) =>
  axios.post('http://localhost:5000/api/users/auth/signup', userData);

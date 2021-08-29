import api from './api-config';

export const loginUser = async (loginData) => {
  //make a post request to the api, authenticate all api login requests
  //({ authentication: loginData }) this is how we send our loginData(ie - FORM DATA) nested in authentication 
  const resp = await api.post('/auth/login', { authentication: loginData });
  localStorage.setItem('authToken', resp.data.token);
  //all api's have a default value,all default values have headers in them, all headers have common headers in them, authorization is one of the common headers 
  //set authorization as equal to our Bearer and Token
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

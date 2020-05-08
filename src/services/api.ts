import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const apiKey = 'a7e4adc514ae4760ec97a1cc3fb3d872';

export default api;

import axios from 'axios';

const API_KEY = 'c1a53fdd89a97d2f6e1a45b6dc7ee374';  // Replace with your actual API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (location: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: location,
      appid: API_KEY,
      units: 'metric'
    }
  });
  return response.data;
};
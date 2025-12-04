import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/login/';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(API_BASE_URL, {
      username,
      password,
    }, {
      withCredentials: true,
    });
    console.log(response.data);    
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
export default loginUser;
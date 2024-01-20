import axios from 'axios';

const API_URL = "http://localhost:8080";

// Get home page
export async function getHome() {
  return axios.get(API_URL + '/home');
}

// Get login page
export async function getLogin() {
  return axios.get(API_URL + '/login');
}

// Get register page
export async function getRegister() {
  return axios.get(API_URL + '/register');
}

// Register user
export async function registerUser(userData) {
  return axios.post(API_URL + '/register', userData);
}

import axios from 'axios';

const BASE_URL = `https://655202615c69a77903296963.mockapi.io`;

export const fetchAll = async () => {
  const {data} = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export const addContact = async newContact => {
  const {data} =  await axios.post(`${BASE_URL}/contacts`, newContact);
  return data;
};

export const deleteContact = async id => {
  const {data} = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};

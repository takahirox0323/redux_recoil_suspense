import axios from "axios";

const API_URL = "  http://localhost:3001/books";

export const fetchdata = async (): Promise<any> => {
  return await axios.get(`${API_URL}`, {});
};

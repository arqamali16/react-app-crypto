/**
 * API Client
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import axios from "axios";

/**
 * Clinent for all the api calls (axios)
 * @constant client
 */
const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    "X-Red-Acre-Token": process.env.REACT_APP_HEADER_TOKEN,
  },
});

export default client;

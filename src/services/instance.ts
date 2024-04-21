import axios from "axios";

/** TODO: create common fetch function  **/
const instance = axios.create({
  timeout: 3000,
});

export default instance;

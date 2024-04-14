import axios from "axios";

/** TODO: create common fetch function  **/
const instance = () => {
  return axios.create({});
};

export default instance;

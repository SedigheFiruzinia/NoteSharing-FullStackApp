import axios from "axios";

const baseUrl = "/api/notes";

//vaghti login shod ba request login token ferestade mishe unja bayad settoken ro seda kard
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (t) => {
  const date = new Date().toLocaleString();
  const body = {
    text: t,
    updatedAt: date,
  };
  console.log(body.lastUpdated);
  const config = {
    headers: { Authorization: token },
  };
  console.log("token", token);
  const response = await axios.post(baseUrl, body, config);
  return response.data;
};

const share = async (id, sharedWith) => {
  const response = await axios.post(`${baseUrl}/${id}`, sharedWith);
  return response.data;
};

const exportedObject = {
  get,
  create,
  share,
  setToken,
};

export default exportedObject;

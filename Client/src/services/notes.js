import axios from "axios";

const baseUrl = "/api/notes";

//vaghti login shod ba request login token ferestade mishe unja bayad settoken ro seda kard
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const get = async (id, sharedNotes) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (t) => {
  const date = new Date().toLocaleString();
  const body = {
    text: t,
    updatedAt: date,
  };
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, body, config);
  return response.data;
};

const update = async (id, text) => {
  const date = new Date().toLocaleString();
  const body = {
    text: text,
    updatedAt: date,
  };
  console.log("body", body);
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseUrl}/${id}`, body, config);
  console.log(response.data);
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
  update,
};

export default exportedObject;

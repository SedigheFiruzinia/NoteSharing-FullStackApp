import axios from 'axios'

const baseUrl = '/api/notes'

//vaghti login shod ba request login token ferestade mishe unja bayad settoken ro seda kard
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async (text) => {
  const config = {
        headers: { Authorization: token },
      }
  const response = await axios.post(baseUrl,text,config)
  return response.data
}

const share = async (id,sharedWith) => {
  const response = await axios.post(`${baseUrl}/${id}`, sharedWith)
  return response.data
}

const exportedObject = {
  get, 
  create,
  share,
  setToken
}

export default exportedObject
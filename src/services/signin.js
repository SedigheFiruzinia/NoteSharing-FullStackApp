import axios from 'axios'

const baseUrl='/api/users'

//credentials:{username: ,password: ,name: }
const signin = async userInfo => {
  const response = await axios.post(baseUrl , userInfo)
  return response.data
}

const getAll = async ()=>{
    const response = await axios.get(baseUrl)
    return response.data
}

const exportedObject={
signin,
getAll
}

export default exportedObject
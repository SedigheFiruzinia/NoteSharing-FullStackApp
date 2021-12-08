import axios from 'axios'
const baseUrl='/api/login'


const login = async Credential => {
console.log('in loginservise')
  const response = await axios.post(baseUrl , Credential)
  return response.data
}
export default login
import axios from 'axios'

const api = 'http://www.mocky.io/v2/5bc3b9cc30000012007586b7'

export default axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
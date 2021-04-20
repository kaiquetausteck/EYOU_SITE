const axios = require('axios');

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'http://pt.itgeo.com.br:4545/';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'https://pt.itgeo.com.br:4545';
} else {
  baseUrl = 'https://pt.itgeo.com.br:4545'
}

const TOKEN = window.localStorage.getItem('token')

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': 'Bearer '+TOKEN
  }
})

export { api, TOKEN }
const axios = require('axios')
async function getUser(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
getUser('pagnojp')
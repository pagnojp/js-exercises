const axios = require('axios');
class User {
  static async getUserInfo(user){
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      console.log(response)
    }
    catch (error) {
      console.error(error)
    }
  }
}
User.getUserInfo('pagnojp')

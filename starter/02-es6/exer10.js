const axios = require('axios')
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response)
    }
    catch(error) {
    console.log(error)
    }
  }
}

Github.getRepositories('pagnojp/js-exercises')
const axios = require('axios');

class GaryAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://garybot.dev/api';
  }

  async getRandomGary() {
    try {
      const response = await axios.get(`${this.baseUrl}/gary`, {
        headers: {
          api_key: this.apiKey
        }
      });
      return response.data.url;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getRandomQuote() {
    try {
      const response = await axios.get(`${this.baseUrl}/quote`, {
        headers: {
          api_key: this.apiKey
        }
      });
      return response.data.quote;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getRandomJoke() {
    try {
      const response = await axios.get(`${this.baseUrl}/joke`, {
        headers: {
          api_key: this.apiKey
        }
      });
      return response.data.joke;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
      if (error.response.status === 403) {
        console.error('Invalid API key.');
      }
    } else if (error.request) {
      // No response was received
      console.error('Error: No response received from the server.');
    } else {
      // Something else happened
      console.error(`Error: ${error.message}`);
    }
    throw error;
  }
}

module.exports = GaryBot;
 

const axios = require('axios');

/**
 * GaryAPI class to interact with the Gary Bot API.
 */
class GaryAPI {
  /**
   * Constructs a new instance of GaryAPI.
   * @param {string} apiKey - The API key used for authentication.
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://garybot.dev/api';
  }

  /**
   * Fetches a random Gary image URL from the API.
   * @returns {Promise<string>} - A promise that resolves to the URL of the random Gary image.
   * @throws {Error} - Throws an error if the request fails.
   */
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

  /**
   * Fetches a random quote from the API.
   * @returns {Promise<string>} - A promise that resolves to the random quote.
   * @throws {Error} - Throws an error if the request fails.
   */
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

  /**
   * Fetches a random joke from the API.
   * @returns {Promise<string>} - A promise that resolves to the random joke.
   * @throws {Error} - Throws an error if the request fails.
   */
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

  /**
   * Handles API errors by logging the appropriate error messages.
   * @param {Error} error - The error object thrown by the request.
   * @throws {Error} - Rethrows the error after logging it.
   */
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

module.exports = GaryAPI;

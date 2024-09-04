const GaryAPI = require('gary-bot-wrapper');

const apiKey = 'your-api-key';
const bot = new GaryBot(apiKey);

async function demo() {
  try {
    console.log('Fetching a random Gary image URL...');
    const garyUrl = await bot.getRandomGary();
    console.log('Random Gary URL:', garyUrl);

    console.log('Fetching a random quote...');
    const quote = await bot.getRandomQuote();
    console.log('Random Quote:', quote);


    console.log('Fetching a random joke...');
    const joke = await bot.getRandomJoke();
    console.log('Random Joke:', joke);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

demo();
 

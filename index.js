// Test
//console.log("Welcome to my index.js file")

// Define a constant that will import the API
const GeminiAPI = require("gemini-api").default;

// Initialize the secret and key constants
const key = "account-qn7buR8IC9jIjzDXE4ZP";
const secret = "3mL5ouNzJ3qPr7b42x8epj82GJX6";

// Create the request for us by calling automatically the appropriate functions
const restClient = new GeminiAPI({key, secret, sandbox:true});
// websocketClient need to be defined so we canbe make the newOrder() function work
const websocketClient =
  new GeminiAPI.WebsocketClient({ key, secret, sandbox: true });

// Create a new order with the appropriate parameters

// This doesn't work right now
restClient.newOrder({
  //amount:10,price:100,side:"buy",symbol:"btcusd"
  "symbol":"btcusd",
  "amount":"5",
  "price":"3633.00",
  "side":"buy",
})
.then(response => console.log(response))
// Return the error into the console if any
.catch(error => console.log(error));

//restClient.getAllSymbols().then(response => console.log(response));
/*
restClient.getTicker("btcusd")
.then(response => console.log(response));
*/

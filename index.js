
/* NOTE :
- Don't forget to activate VPN from mlibrary or the bot won't launch
*/
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
/*
restClient.newOrder({
  //amount:10,price:100,side:"buy",symbol:"btcusd"
  "symbol":"btcusd",
  "amount":"5",
  "price":"3633.00",
  "side":"buy",
})
.then(response => console.log(response))
// Return only the order_id
//.then(response => console.log(response.order_id))
// Return the error message into the console if any error
.catch(error => console.log(error));
*/


// Test cancelOrder
// Create an order and cancel it immediately
/*
restClient.newOrder({
  //amount:10,price:100,side:"buy",symbol:"btcusd"
  "symbol":"ethusd",
  "amount":"10",
  "price":"500.00",
  "side":"buy",
})
.then(response => restClient.cancelOrder({order_id:response.order_id}))
// Print the response to the console
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// Test other functions
//restClient.getAllSymbols().then(response => console.log(response));
/*
restClient.getTicker("btcusd")
.then(response => console.log(response));
*/

// TEST
// Check the order book
/*
restClient.getOrderBook("btcusd")
.then(response => console.log(response))
.catch(error => console.log(error));
*/


/*
// TEST
restClient.getTicker("btcusd")
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// 1. Show my available balance
/*
restClient.getMyAvailableBalances()
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// 2. Create a few buy limit order (3). Make sure the price is too low for Gemini to fullfil the buy order
/*
restClient.newOrder({
  "symbol":"ltcusd",
  "amount":"10",
  "price":"50.00",
  "side":"buy",
})
// Print the response to the console
.then(response => console.log(response))
.catch(error => console.log(error));

restClient.newOrder({
  "symbol":"btcusd",
  "amount":"1",
  "price":"2000.00",
  "side":"buy",
})
// Print the response to the console
.then(response => console.log(response))
.catch(error => console.log(error));

restClient.newOrder({
  "symbol":"ethusd",
  "amount":"10",
  "price":"500.00",
  "side":"buy",
})
// Print the response to the console
.then(response => console.log(response))
.catch(error => console.log(error));

restClient.getTicker()
// Print the response to the console
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// 3. Get a list of all active orders
/*
restClient.getMyActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// 4. Cancel all active orders
/*
restClient.cancelAllActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));
*/

// 5.
restClient.getMyActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));

# FetchExercise

## Setting up the routes 

1. Clone the repo to your machine

2. If Node isn't installed yet, please install it.

3. Use npm to install yarn: npm install -g yarn

4. In the project directory install all dependencies and create a package.json with this command: yarn init

5. Then use the command "yarn start" to start the server.


## Testing using Postman

1. Install Postman on your machine
2. For a post request to add a transaction, use the following format: localhost:3000/transaction/add/{company name}/{amount}/{{currentDate}}
3. currentDate is a global variable. And it's entered through the Pre-request script as shown below.
![PostMan Post](https://i.postimg.cc/QNKRd5m7/Screen-Shot-2021-04-23-at-11-32-43-PM.png)

5. Get the company balance by doing a get request: localhost:3000/payerBalances/getPoints
6. Call a company to spend with the command: localhost:3000/spendPoints/spend/{some number}


# Accounting notebook
Accounting notebook API REST Service and React Client according to Coding Challenge definitions.

Server based on [generator-express-no-stress](https://github.com/cdimascio/generator-express-no-stress) generator.
Client based on [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)

## Prerequisites
In order to properly run this project you must have installed Node v8 or newer and GIT

## Quick start
Obtain the project
```shell
git clone https://github.com/narigondelsiglo/accounting-notebook
```
Install dependencies and launch both frontend and backend
```shell
./launch.sh
```

### With Docker

Install dependencies and launch both frontend and backend
```shell
docker run -p 5000:5000 -p 3000:3000 --name accounting-notebook -d accounting-notebook
```



## Architecture description
React frontend connection listens on port 3000
NodeJs REST API backend listens on port 5000

## Install Dependencies
Install backend dependencies (one time operation):
```shell
npm install
```
Install frontend dependencies (one time operation):
```shell
cd client
npm install
cd ..
```

## Run It

Runs the application is development mode. Should not be used for production. In project root directory:
```shell
npm start
```
## Try It

### React App Frontend
* Open you're browser to [http://localhost:3000](http://localhost:3000)

### REST API Backend
* Invoke the `transactions` endpoint
```shell
curl http://localhost:5000/api/v1/transactions
```
* Check the account `balance`
```shell
curl http://localhost:5000/api/v1/balance
```


* Swagger UI: Access to automatic generated API explorer in your browser
[http://localhost:5000/api-explorer/](http://localhost:5000/api-explorer/)
  

## Debug It
#### Debug the server:
```shell
npm run dev:debug
```

## Feed some random data
```shell
# random amount credit
curl 'http://localhost:5000/api/v1/transactions' -H 'Content-Type: application/json' --data-binary "{\"type\": \"credit\", \"amount\": $RANDOM}"
# 10 bucks debit
curl 'http://localhost:5000/api/v1/transactions' -H 'Content-Type: application/json' --data-binary "{\"type\": \"debit\", \"amount\": 10}"
```
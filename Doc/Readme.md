# Medichain

Group members: Akhil

Medichain is a helcare blockchain which is used to store the data of patients, their treatment details and etc.


## Getting Started

The medical field is one of the important field where the data is being given more importance because wrong data or information can harm someone's life.So the data they store are given more importance and are need to be handled more safely. This is the place where the blockchain can help us to solve the problem. The data can be stored and managed using the blockchain technology. That is we can create a blockchain for storing and managing the data of patients. So that the doctors and as well as the patients can verify that the data  is the data that is originated from the orignal place or from a valid person. And the whole medical system is transparent to the user in each level.


### Prerequisites

In order to run the project you need to install,
```
sudo apt-get install nodejs

get to project folder
```
cd /medichain
```
```
Install web3js
```
npm install web3
```
Install solc
```
npm install solc
```
Install truffle
```
npm install truffle
```
Install node modules  using
```
npm install
```
Initalise truffle
```
truffle init
```
Create migration 
```
truffle create migration Medichain
```

In this time open another terminal and run a geth network it can be Dev chain or a private chain, here we use to deploy contract from remix to a injected web3 using metamask and that is in ropsten test network.
```
ganache-cli
```
or
```
geth --identity "miner" --networkid 4002 --datadir  devchain --rpc --rpcport "8545" --unlock 0 --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal" --dev
``` 
For that create 10 accounts with test ethers and connect that to metamask. We can use ganache-cli to create the accounts and can add the accounts to metamask.

After completeing these steps, deploy the contract in ropsten network and copy the contract address and paste it in the [app.js]()
contractaddress = "current contract address", copy the Abi and the coinbase address and update that in app.js

Next in terminal go to the project folder and give start command
```
npm start
```
When the project is successfully run navigate to [localhost](http://localhost:3000) there you will get the projects landing page.


## Working

1. Go to Admin page and add a hospital using form add a key from metamask that we have created earlier, note the key it is only visible here, so note it for later use.

2. The other functionalities for the admin is search hospitals, doctors, patients.

3. Go to hospitals here we can add doctors by giving the corresponding hospital key that we have note before and assign a key to doctor and this also note own the key for later use, here we can search the doctors present in the network. Search the patients.

4. Go to doctor page to add patients to the network and add theri treatment details. To add patients enter doctors key and then enter the patients details and then assign an address to patients the submit the form. To add the treatment details fill the form with patient id and submit the form with doctors key. Doctors can also view patient and their treatment details. As well as search hospitals

5. Go to patients page where you can see the patient, search hospitals in the network , search doctors etc.



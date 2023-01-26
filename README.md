# Steps to use the repo
1. install Node.js & npm
2. clone this repo
3. `cd` into the repo and run `npm i`
4. download the transaction data for your contract by going to it on etherscan scrolling down and clicking on "Download CSV Export"
5. rename the file to `input.csv` and place it in this repo
6. Do one of these: 
- run `node snapshot.js <YOUR_FUNCTION>`. Replace `<YOUR_FUNCTION>` with the name of the staking (or any other) function in the contract you wish to take a snapshot of. You will now get the output as `addressesThatStaked.csv`
- run `node uniqueAddressSnapshot.js <YOUR_FUNCTION>` if the transactions are not too high. Replace `<YOUR_FUNCTION>` with the name of the staking (or any other) function in the contract you wish to take a snapshot of. You will now get the output as `uniqueAddressesThatStaked.csv`
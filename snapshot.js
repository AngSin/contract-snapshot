const fs = require('fs');

const stakeFunction = (process.argv[2] || 'stake').toLowerCase();
const transactionsString = fs.readFileSync('./input.csv').toString();

const fromAddressIndex = 4;
const methodIndex = 15;

const transactions = transactionsString.split('\n');

const addressesThatStaked = [];

transactions.forEach(transactionData => {
	const transaction = transactionData.split(',');
	const method = transaction[methodIndex];
	const from = transaction[fromAddressIndex];
	if (method && method.toLowerCase() === `"${stakeFunction}"`) {
		addressesThatStaked.push(from);
	}
});

fs.writeFileSync('./addressesThatStaked.csv', addressesThatStaked.join('\n'));



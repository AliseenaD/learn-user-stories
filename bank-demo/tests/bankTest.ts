import { Bank } from "../src/bank";

const accounts = [
    { id: 1234567891, balance: 1230 },
    { id: 9808657341, balance: 7500 },
    { id: 2341563548, balance: 5000 }
];
const usernames = [
    'user1',
    'user2',
    'user3'
];

const bank = new Bank(accounts, usernames);

console.log('Beginning create account tests...');

// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 7482637453);
if (acc.id !== 7482637453 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('Test failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 7482637453);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// Scenario 2: unsuccessful account creation user below 18
try {
    bank.createAccount('user1', 17, 8795643256);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: Unsuccessful account creation due to invalid username
try {
    bank.createAccount('user4', 24, 9999999992);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

console.log('Beginning deposit money tests...');

 // Depositing money Scenario 1: Successful deposit
 bank.createAccount('user2', 30, 1233242456);
 const postDeposit = bank.depositMoney('user2', 1233242456, 51000);
 if (postDeposit.balance !== 51000) {
    console.log('Test failed');
 }
 else {
    console.log('Scenario 1 passed');
 }

 // Depositing money Scenario 2: Unsucessful deposit due to invalid account number
 try {
    bank.depositMoney('user2', 2315467893, 1220);
    console.log('Scenario 2 failed');
 }
 catch(e) {
    console.log('Scenario 2 passed');
 }

 // Depositing money Scenario 3: Unsuccessful deposit due to invalid username
 try {
    bank.depositMoney('user5', 1233242456, 100);
    console.log('Scenario 3 failed');
 }
 catch(e) {
    console.log('Scenario 3 passed');
 }

 // Depositing money Scenario 4: Unsuccessful deposit due to invalid amount
 try {
    bank.depositMoney('user2', 1233242456, -100);
    console.log('Scenario 4 failed');
 }
 catch(e) {
    console.log('Scenario 4 passed');
 }

 console.log('Beginning withdraw money tests...');

 // Withdrawing money Scenario 1: Successful withdrawal
 bank.createAccount('user2', 28, 1909873645);
 bank.depositMoney('user2', 1909873645, 100);
 const account = bank.withdrawMoney('user2', 1909873645, 50);
 if (account.balance !== 50) {
    console.log('Scenario 1 failed');
 }
 else {
    console.log('Scenario 1 passed');
 }

// Withdrawing money Scenario 2: Unsucessful withdrawal due to invalid account number
try {
    bank.withdrawMoney('user2', 2315467893, 1220);
    console.log('Scenario 2 failed');
 }
 catch(e) {
    console.log('Scenario 2 passed');
 }

 // Withdrawing money Scenario 3: Unsuccessful withdrawal due to invalid username
 try {
    bank.withdrawMoney('user5', 1909873645, 10);
    console.log('Scenario 3 failed');
 }
 catch(e) {
    console.log('Scenario 3 passed');
 }

 // Withdrawing money Scenario 4: Unsuccessful withdrawal due to invalid amount
 try {
    bank.withdrawMoney('user2', 1909873645, -50);
    console.log('Scenario 4 failed');
 }
 catch(e) {
    console.log('Scenario 4 passed');
 }

 // Withdrawing money Scenario 5: Unsuccessful withdrawal due to negative remaining balance
 try {
    bank.withdrawMoney('user2', 1909873645, 5000);
    console.log('Scenario 5 failed');
 }
 catch(e) {
    console.log('Scenario 5 passed');
 }
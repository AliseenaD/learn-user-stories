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

import { AccountType, BankType } from "./types";

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * Constructor initializes bank with accounts and usernames
     * @param initialAccounts - inital accounts
     * @param initialUsernames - initial usernames
     */
    constructor(initialAccounts: AccountType[], initialUsernames: string[]) {
        this.accounts = initialAccounts;
        this.usernames = initialUsernames;
    }

    /**
     * Creates a new account
     * @param username - account username
     * @param age - account age
     * @param accountNumber - account number
     * @returns account if validation passes
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        // Validation of input data
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (this.isUsernameExists(username)) {
            throw new Error('Username exists');
        }
        if (age < 18) {
            throw new Error('Age is below 18');
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error('Account alraedy exists');
        }
        
        // Create account
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        this.usernames.push(username);
        return account;
    }

    /**
     * Checks to find an account by id 
     * @param id - id
     * @returns true if account found otherwise false
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * Checks to see if an account umber is valid
     * @param accountNumber - account number
     * @returns true if account number is invalid false otherwise
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    /**
     * Checks to see if a username exists
     * @param username - username
     * @returns true if username exists false otherwise
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }
}
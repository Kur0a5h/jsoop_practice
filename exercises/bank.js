

class Bank{
	constructor(name){
		this.name=name;
		this.accounts={};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	makeAccount( accountNumber ){
		if(this.accounts.hasOwnProperty(accountNumber)){

				return false

		}else{
			var generateNewAccount = new Account();
			this.accounts[accountNumber]= generateNewAccount;
			return generateNewAccount;
		}

		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount( accountNumber ){
		if(this.accounts.hasOwnProperty(accountNumber)){
			return true;
		}else{
			 return false;
			}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		//removes an account
		if(this.accounts.hasOwnProperty(accountNumber)){
			if(this.accounts[accountNumber].funds===null||this.accounts[accountNumber].funds===0){
				delete this.accounts[accountNumber];
				return 'account '+accountNumber+' deleted';
			}else{
				return 'account is not empty';
			}
		}else{
			return 'account '+accountNumber+' does not exist';
		}
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit( accountNumber,amount){
		if(this.accounts.hasOwnProperty(accountNumber)){
			
			this.accounts[accountNumber].add(amount);
			var currentFunds=this.accounts[accountNumber].funds;
			return 'account '+accountNumber+' now has '+currentFunds;
		}else{
			return 'account does not exist';
		}
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		if(this.accounts.hasOwnProperty(accountNumber)){
			var previousFunds=this.accounts[accountNumber].funds;
			this.accounts[accountNumber].remove(amount);
			var currentFunds=this.accounts[accountNumber].funds
			var withdrawnAmount=previousFunds-currentFunds;
			return 'removed '+withdrawnAmount+' from account '+accountNumber+'. It now has '+currentFunds;
		}else{
			return 'account does not exist';
		}
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}
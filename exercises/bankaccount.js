

class Account{
	constructor(){
		this.funds=null;
		//store the amount of money in the account
	}
	add( amount ){
		this.funds+=amount;
		return this.funds;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if(amount<=this.funds){
			this.funds-=amount;
			return amount
		}else{
			var actualWithdraw=this.funds;
			this.funds=0;
			return actualWithdraw;
		}
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.funds;
		//returns the amount in the account
	}
}
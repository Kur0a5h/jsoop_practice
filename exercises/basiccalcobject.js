
class Calculator{
	constructor(){
		this.operator=null;
		this.num1=null;
		this.num2=null;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator( operator ){
		if(operator==='+'|operator==='-'|operator==='*'|operator==='/'){
		this.operator=operator;
		return true;
		}else{
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( number ){
		if(typeof(number)==='number'&&this.num1===null){
			this.num1=number;
			return 1;
		}else if(typeof(number)==='number'&&this.num2===null){
			this.num2=number;
			return 2;
		}else{
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var output;
		switch(this.operator){
			case '+':
				output=this.num1+this.num2;
			break;
			case '-':
				output=this.num1-this.num2;
			break;
			case '*':
				output=this.num1*this.num2;
			break;
			case '/':
				output=this.num1/this.num2;
			break;
		}
		this.num1=null;
		this.num2=null;
		this.operator=null;
		return output;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}
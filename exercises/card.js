
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		this.cardArray=[];
		//make storage for your card objects
		
		
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		var cardToAdd= new Card(suit,faceValue);
		//adds the card object to the storage in the constructor
		this.cardArray.unshift(cardToAdd);
		return this.cardArray.length;
		//returns the amount of cards currently stored
	}
	shuffle(){

		for(var cardIndex=0;cardIndex<this.cardArray.length;cardIndex++){
			var number1 = Math.floor(Math.random() * this.cardArray.length-1) + 1;
           	var number2 = Math.floor(Math.random() * this.cardArray.length-1) + 1;
            var temp = this.cardArray[number1];
           	this.cardArray[number1] = this.cardArray[number2];
           	this.cardArray[number2] = temp;
       }
		
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		return this.cardArray.length;
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( amount ){
		//deals out a number of cards
		var newHand=this.cardArray.splice(0,amount);
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
		return newHand;
	}
}
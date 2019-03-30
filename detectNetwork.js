// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
   var len = cardNumber.length;
   var startTwo = cardNumber.slice(0, 2);
   var startThree = cardNumber.slice(0, 3);
   var startFour = cardNumber.slice(0, 4);
   var startSix = cardNumber.slice(0, 6);
   startSix = Number(startSix);
   startThree = Number(startThree);
   startFour = Number(startFour);
   startTwo = Number(startTwo);
   var arr = [5018, 5020, 5038, 6304];
   var sarr = [4903, 4905, 4911, 4936, 6333, 6759];
   var str = '';
   
      // Diner's Club

   if(len === 14 && (startTwo === 38 || startTwo === 39)){
        str = 'Diner\'s Club';
   }  
       //American Express
   if (len === 15 && (startTwo === 34 || startTwo === 37)){
   	   str = 'American Express';
   }  
      //MasterCard
   if (len === 16 && (startTwo === 51 || startTwo === 52 || 
   	          startTwo === 53 || startTwo === 54 || startTwo === 55)){
   	   str = 'MasterCard';
   }  
     // Switch
   if (len === 16 || len === 18 || len === 19){
   	  if(sarr.includes(startFour) || [633110, 564182].includes(startSix)){
   	  	 str = 'Switch';
   	  	 return str;
   	  }
   } 
     // Visa
   if ((len === 13 || len === 16 || len === 19) && 
   	           startTwo.toString()[0] === '4'){
   	  str = 'Visa';
   }  
       //Discover
   if (len === 16 || len === 19) {
   	      if(startTwo === 65){
   		    str = 'Discover';
   	          }  else if (startFour === 6011){
   	       	str = 'Discover';
   	       } else  {    		
             
             for(var i = 644; i <= 649; i++){
   	         if(i === startThree){
   		         str = 'Discover';
   	             }
                }
   	       }
   }  
      // Maestro
   if (len >= 12 && len <= 19){
   	   if (arr.includes(startFour)){
   	   	str = 'Maestro';
   	   }
   } 
           // China UnionPay
   if (len >= 16 && len <= 19){  
   	   
   	   for(var i = 622126; i <= 622925; i++){
   	   	if(startSix === i){
   	   		str = 'China UnionPay';
   	   	}
   	   }
   	   for(var i = 624; i <= 626; i++){
   	   	if(startThree === i){
   	   		str = 'China UnionPay';
   	   	}
   	   }
   	   for(var i = 6282; i <= 6288; i++){
   	   	if(startFour === i){
   	   		str = 'China UnionPay';
   	   	}
   	   }
   }
   
   return str;
};

//console.log(detectNetwork('4903123456789012'))
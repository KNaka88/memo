
var array = [];

//STEP1: given userInput, check if it is a number

  var userNumber = parseInt(prompt("type any number"));



  //if FALSE userInput was NOT number: return error sentence
  //if TRUE  userInput was number: follow STEP2

//STEP2: given Usernumber, output the array

  //ex. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  var convertToArray = function(){
    for(var i=0; i<userNumber+1; i++){
      array[i] = i;
    }
    alert(array);
  }

    convertToArray();

//STEP3: given the array, replace the specific numbers of array to according words;
  //using for-loop and when if you found either 15 or 5 or 3, replace to String

  var divisibleBy = function(userNumber){
    if( (userNumber % 15) === 0){
      return "ping-pong";
    }else if( (userNumber % 5) === 0){
      return "pong";
    }else if( (userNumber % 3) === 0){
      return "ping";
    }else{
      return userNumber;
    }
  };
  //[1, 2, ping, 4, pong, ping, 7, 8, ping, pong,.....14, ping-pong]


//STEP4: Display the Array (using for-loop)



//Front logic
  //Implement tryagain (previous output disappeared and user can try again)

  //get the userInput

  //call func STEP1

  //call func STEP2

  //call func STEP3

  //Call func Step4 Display:: show the result of the array
  //"<li>" + "</li>""

///If I finished early,
//show number and ping-pong words, gradually!!
//ping-pong, animation and color!!

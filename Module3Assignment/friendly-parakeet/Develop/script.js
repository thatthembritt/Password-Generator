// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword ()
  {

    var result = '';
//arrays for characters available to user 
  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialArr = ['!', '@', '#', '$', '*', '%'];

  var finalPassword = [];

//the following determines that the user enters a password length that is within the provided guidelines 
      var length = prompt ("Please specify password length.");
    if (length < 8 || length > 128 || length == null)
    {
      alert("Password length must be a number between 8 and 128 characters.");
      generatePassword();
    }
    else
    {
      queryPasswordParameters();
    }
  
    var isLowerCase;
    var isUpperCase;
    var isNumbers;
    var isSpecial;
//this function ensures that user choice meets the given parameters 
    function queryPasswordParameters () 
    {
    isLowerCase = confirm ("Would you like to use lowercase letters?");
    isUpperCase = confirm ("Would you like to use uppercase letters?");
    isNumbers = confirm ("Would you like to use numbers?");
    isSpecial = confirm ("Would you like to use special characters?");
      
   
      // Check for if all prompts were no, if so the process restarts
      if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecial)
      {
        alert("Please confirm at least one character type for the password.");
        queryPasswordParameters();
      }
    }      

   var userChoiceArr = [];
//array used to determine user input i.e. lowercase, uppercase, numbers, special 
    if (isLowerCase)
    {
      expandAlphabet(lowerCaseArr);
    }
    
    if (isUpperCase)
    {
      expandAlphabet(upperCaseArr);
    }

    if (isNumbers)
    {
      expandAlphabet(numbersArr);
    } 

    if (isSpecial)
    {
      expandAlphabet(specialArr);
    }    
    
    //this function takes the user choices into account and places them into a new array by using a concat function
    function expandAlphabet(newArray)
{
      var joinedArray = userChoiceArr.concat(newArray);
      userChoiceArr = joinedArray;
}
    
      console.log(userChoiceArr);

    var passwordArr = [];
    var finalPassword = '';

    var upperDone = false;
    var lowerDone = false;
    var numDone = false;
    var specDone = false;
    
    //this for loop ensures that the length matches the user's input and then selects characters using the following for loops, this makes it so that all character types are entered upon selection
    //after taking the user's choice into account it then cycles through the remaining for loops
    for (i = 0; i < length; i++)
    {
      
      var tempArray = [];
    
      if(isUpperCase && !upperDone) 
      {
        tempArray = upperCaseArr; 
        upperDone = true; 
      }
      else 
      {
        if(isLowerCase && !lowerDone)
        {
          tempArray = lowerCaseArr;
          lowerDone = true;
        }
        else
        {
          if(isNumbers && !numDone)
          {
            tempArray = numbersArr;
            numDone = true;
          }
          else
          {
            if(isSpecial && !specDone)
            {
              tempArray = specialArr;
              specDone = true;
            }
            else //this translates to the following tempArray after the character types have been selected
            {
              tempArray = userChoiceArr;
            }
          }
        }
      }
    
      //adds a random character from the alphabet stored in the temporary array to a random spot in the password array
      var randChar = tempArray[Math.floor(Math.random()*tempArray.length)];
      passwordArr.splice(Math.floor(Math.random()*passwordArr.length), 0, randChar);
    }

    return passwordString(passwordArr);


  }
//this function returns the final password :) 
  function passwordString (passArray)
{
	var result = '';
	for (i = 0; i < passArray.length; i++)
	{
		result += passArray[i]
	}
	return result;
}




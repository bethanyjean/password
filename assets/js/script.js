var passwordArray = [];
var password = "";
var length = 0;
var upper = "";
var upperCaseTxt = "upper case letters";
var lower = "";
var lowerCaseTxt = "lower case letters";
var number = "";
var numberTxt = "numbers";
var special = "";
var specialCharTxt = "special characters";
var allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allLower = "abcdefghijklmnopqrstuvwxyz";
var allNum = "1234567890";
var allChar = "!#$%&()*+,-./:;<>=@?[]^_{}|~";
var fullArray = "";

// ask user for the different parameters of the password

// ask for the password and check the length of the password

var passwordLength = function() {
    length = window.prompt("How long would you like your password?");
    if (length < 8 || length > 128) {
        window.alert("Your password must be between 8 and 128 characters.");
        console.log(length)
        passwordLength();
    };
    //verify user's entry
    if (confirm("Do you want your password to be " + length + " characters long?") == false) {
        passwordLength();
    }
}

// Choose and verify other attributes

var makeChoices = function(attributeTxt) {
    var attribute = window.prompt("Do you want your password to contain " + attributeTxt + "? Y/N");
    if (attribute.toLowerCase() === 'y') {
        if (confirm("You want to include " + attributeTxt + " in your password")== false) {
            attribute = 'n'
        };
    } else if(attribute.toLocaleLowerCase() === 'n'){
        if (confirm("You DO NOT want to include " + attributeTxt + " in your password")== false) {
            attribute = 'y'
        };
    } else {
        (window.alert("Please enter a valid response: Y/N"));
        makeChoices(attribute, attributeTxt);
    }
    return attribute.toLowerCase();
}

//create the full choice of password characters

var makeArray = function() {
    if (upper == "y") {
        fullArray = fullArray + allUpper;
    };
    if (lower == "y") {
        fullArray = fullArray + allLower;
    };
    if (number == "y") {
        fullArray = fullArray + allNum;
    };
    if (special == "y") {
        fullArray = fullArray + allChar;
    };
}

//function to create password

// function createPassword(length) {
//     for (var i = 0; i < length, i++) {

//     }
//     password = toString(passwordArray);
// }


passwordLength();
console.log(fullArray);
var upper = makeChoices(upperCaseTxt);
var lower = makeChoices(lowerCaseTxt);
var number = makeChoices(numberTxt);
var special = makeChoices(specialCharTxt);
makeArray();


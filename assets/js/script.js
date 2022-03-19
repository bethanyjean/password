var password = [];
var length = 0;
var upper = "yes";
var lower = "yes";
var number = "yes";
var special = "yes";

// ask user for the different parameters of the password

var passwordLength = function() {
    // ask for the password and check the length of the password
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

passwordLength();
document.querySelector("#generate").addEventListener("click", writePassword);



// Arrays
var num = ["0","1","2","3","4","5","6","7","8","9"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Characters = ["!", "%", "$", ")", "^", "+", "-", ".", "(", "]", "[", "{","."];


var passwordLength = "";
var confirmNum;
var confirmCharacters;
var confirmLowerCase;
var confirmUpperCase;

function generatePassword () {
    var passwordLength = (prompt("Input amount for password"));

    if(passwordLength <= 7 || passwordLength >= 100) {
        alert("password length is between 8-99 characters")
        var passwordLength = (prompt("Input amount for password"));
    }

    alert('password will equal this ${passwordLength} characters');

    var confirmNum = confirm ("press Ok to have numbers in your password");
    var confirmCharacters = confirm ("press Ok to have characters in your password");
    var confirmLowerCase = confirm ("press Ok to have lowercase letters in your password");
    var confirmUpperCase = confirm ("press Ok to have uppercase letters in your password");

    if(confirmUpperCase === false && confirmLowerCase === false && confirmCharacters === false && confirmNum === false) {
        alert("you need to choose one of each")
        var confirmNum = confirm ("press Ok to have numbers in your password");
        var confirmCharacters = confirm ("press Ok to have characters in your password");
        var confirmLowerCase = confirm ("press Ok to have lowercase letters in your password");
        var confirmUpperCase = confirm ("press Ok to have uppercase letters in your password");
    
    }
    var passwordChar =[]
    
    if(confirmCharacters){
        passwordChar = passwordChar.concat(Characters);
    }
    if(confirmLowerCase){
       passwordChar = passwordChar.concat(LowerCase);
    }
    if(confirmUpperCase){
        passwordChar = passwordChar.concat(UpperCase);
    }
    if(confirmNum){
        passwordChar = passwordChar.concat(num);
    }

    console.log(passwordChar)

    var passwordGenerate =""

    for (var i = 0; i < passwordLength; i++){
        passwordGenerate = passwordGenerate + passwordChar[Math.floor(Math.random()* passwordChar.length)];
        console.log(passwordGenerate)
    }
    return passwordGenerate;
}

function writePassword() {
    var password = generatePassword();
    var pwText = document.querySelector("#password");

    pwText.value = password;
}



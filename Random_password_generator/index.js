function hasCommonChar(str1, str2) {
    if (!str2) return true; // If no requirement, consider it satisfied
    const set = new Set(str2);
    return [...str1].some(char => set.has(char));
}

function validate_password(password, ...validation_strings) {
    let result = true;
    for (let string of validation_strings) {
        if (string) {
            result = result && hasCommonChar(password, string);
        }
    }
    return result;
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "0987654321";
    const symbolChars = "`~!@#$%^&*_+=-.<>?";

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length < 12) {
        return `(password length must be at least 12)`;
    }
    if (!allowedChars) {
        return `(at least 1 set of characters must be selected)`;
    }

    do {
        password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    } while (!validate_password(
        password,
        includeLowercase ? lowercaseChars : "",
        includeUppercase ? uppercaseChars : "",
        includeNumbers ? numberChars : "",
        includeSymbols ? symbolChars : ""
    ));

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const incLowercase = document.getElementById('incLowercase');
const incUppercase = document.getElementById('incUppercase');
const incNumbers = document.getElementById('incNumbers');
const incSymbols = document.getElementById('incSymbols');

const result = document.getElementById("result");
const myButton = document.getElementById("myButton")
myButton.onclick = function () {
    const password = generatePassword(
        passwordLength,
        incLowercase.checked,
        incUppercase.checked,
        incNumbers.checked,
        incSymbols.checked
    );

    result.textContent = password;
    console.log(`Generated password: ${password}`);
}
// title: temperature Convertor

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
    result.style.color = "black"
    if(toFahrenheit.checked){
        // result.textContent = "You selected to Fahrenheit"
        temp = Number(textBox.value)*9/5+32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (toCelcius.checked){
        // result.textContent = "You selected to Celcius"
        temp = (Number(textBox.value)-32)*5/9;
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a Unit!!"
        result.style.color = "red"
    }
    
}

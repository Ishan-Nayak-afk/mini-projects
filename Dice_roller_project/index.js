// title: Dice Roller Program

function rollDice(){
    const numOfDice = Number(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const values = [];
    const diceMaxNum = 6;
    const diceMinNum = 1;
    const images = [];

    for (let i = 0 ; i < numOfDice; i++){
        const value = Math.floor(Math.random()*(diceMaxNum-diceMinNum+1)) + diceMinNum;
        // console.log(value);
        values.push(value);
        images.push(`<img src='Dice_images/${value}.png' alt="Dice : ${value}" id = "images">`);
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("")

}

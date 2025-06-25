const takeUl = document.querySelector('ul')
const rollBtn = document.getElementById('roll-btn')
const dice = document.getElementById('dice')


function rollDice(){
    animateDice()
    let diceroll = Math.floor(Math.random() * 6) +1;
    const diceFace = getDiceFace(diceroll)
    dice.innerHTML = diceFace;

    //li creation

    const liCreation = document.createElement('li')
    liCreation.className = 'roll-history';
    liCreation.innerText = `Roll ${diceroll}:`
    takeUl.appendChild(liCreation)

    //diceFace history

    const diceHistory = document.createElement('span')
    diceHistory.className = 'dice-history'
    diceHistory.innerHTML = diceFace
    liCreation.appendChild(diceHistory)

}

function animateDice(){
    dice.classList.add('roll-animation')
    setTimeout(() => {
        dice.classList.remove('roll-animation')
    }, 1500);
}


function getDiceFace(dice){
    switch(dice){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return ""
            
    }
}




const API_URL = "https://api.adviceslip.com/advice";
let adviceSlip = {};
const ADVICE_CARD = document.querySelector('.card');
const DICE_BTN = document.querySelector('.dice')
async function getRandomAdvice() {
    try {
        ADVICE_CARD.children[1].textContent = "Loading .. "
        let response = await fetch(API_URL);
        if (response.ok) {
            let { slip } = await response.json();
            adviceSlip = slip; 
            console.log(slip);
            display();
        } else {
            
        }
    } catch (error) {
        console.log(error);
    }
}

getRandomAdvice();

function display() {
    ADVICE_CARD.children[0].firstElementChild.textContent = adviceSlip.id;
    ADVICE_CARD.children[1].textContent = adviceSlip.advice;
}

DICE_BTN.addEventListener('click', ()=>{
    getRandomAdvice()
})
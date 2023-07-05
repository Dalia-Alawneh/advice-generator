const API_URL = "https://api.adviceslip.com/advice";
let adviceSlip = {};
const ADVICE_CARD = document.querySelector('.card');

async function getRandomAdvice() {
    try {
        ADVICE_CARD.children[1].textContent = "Loading .. "
        let response = await fetch(API_URL);
        if (response.ok) {
            let { slip } = await response.json(); // Destructure the slip object and assign it to adviceSlip
            adviceSlip = slip; // Assign the destructured adviceSlip to the global slip variable
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
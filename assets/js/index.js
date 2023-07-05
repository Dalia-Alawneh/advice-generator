const API_URL = "https://api.adviceslip.com/advice";
let adviceSlip = {};
const cardElement = document.querySelector('.card');
const diceBtnElement = document.querySelector('.dice');

async function fetchAdvice() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            const { slip } = await response.json();
            return slip;
        } else {
            throw new Error("Failed to fetch advice");
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch advice");
    }
}

function displayAdvice(adviceSlip) {
    cardElement.children[0].firstElementChild.textContent = adviceSlip.id;
    cardElement.children[1].textContent = adviceSlip.advice;
}

async function getRandomAdvice() {
    try {
        cardElement.children[1].textContent = "Loading...";
        const slip = await fetchAdvice();
        adviceSlip = slip;
        console.log(slip);
        displayAdvice(slip);
    } catch (error) {
        cardElement.children[1].textContent = "Error loading advice";
    }
}

getRandomAdvice();

diceBtnElement.addEventListener('click', getRandomAdvice);

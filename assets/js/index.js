const cardElement = document.querySelector('.card');
const diceBtnElement = document.querySelector('.dice');

async function fetchAdvice() {
    const API_URL = "https://api.adviceslip.com/advice";
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
        return await fetchAdvice();
    } catch (error) {
        cardElement.children[1].textContent = "Error loading advice";
    }
}
async function generateAdvice(){
    let slip = await getRandomAdvice()
    displayAdvice(slip)
}
generateAdvice();

diceBtnElement.addEventListener('click', generateAdvice);

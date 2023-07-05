const dividerImg = document.getElementById('divider')
console.log(cardElement);
function changeDividerthrottle(func, delay) {
    let timeoutId;

    return function () {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, arguments);
                timeoutId = null;
            }, delay);
        }
    };
}

function handleMediaQueryChange() {
    if (window.matchMedia("(max-width: 1610px)").matches) {
        dividerImg.setAttribute('src','assets/images/pattern-divider-mobile.svg')
    }else {
        dividerImg.setAttribute('src','assets/images/pattern-divider-desktop.svg')
    }
}
window.addEventListener("resize", changeDividerthrottle(handleMediaQueryChange, 200));

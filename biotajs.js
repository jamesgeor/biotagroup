var head = document.querySelector("header");



 setTimeout(function () {
    head.style.animationPlayState = "running";
    nava.style.animationPlayState = "running";
}, 5501);


//This code pauses the header animation just when it has descended fully.
setTimeout(function () {
    head.style.animationPlayState = "paused";
}, 8001);

//This code unpauses and finishes the animation's one-time loop when X is clicked 
function completeheaderanimation() {
    head.style.animationPlayState = "running";
    nava.style.animationPlayState = "running";
};

var dot = document.querySelector(".buttonaki");



function loading() {
    // Dot's scaling to cover the entire page makes the page much bigger. With hidden overflow,
    // bypass this problem.
    document.body.style.overflow = "hidden";
    dot.classList.add("buttonakiinaction1");
    setTimeout(function () { dot.classList.add("buttonakiinaction2") }, 1001);

    biotalogoload();
}

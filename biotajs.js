var head = document.querySelector("header");

//This code pauses the header animation just when it has descended fully.
setTimeout(function () {
    head.style.animationPlayState = "paused";
}, 2501);

//This code unpauses and finishes the animation's one-time loop when X is clicked 
function completeheaderanimation() {
    head.style.animationPlayState = "running";
    nava.style.animationPlayState = "running";
};

var dot = document.querySelector(".buttonaki");



function loading() {
    dot.classList.add("buttonakiinaction1");
    setTimeout(function () { dot.classList.add("buttonakiinaction2") }, 1001);
    biotalogoload();
}

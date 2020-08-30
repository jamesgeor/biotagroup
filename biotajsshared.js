var nava = document.querySelector("nav");

//This code pauses the header animation just when it has descended fully.
setTimeout(function () {
    nava.style.animationPlayState = "paused"
}, 8001);

var logo = document.querySelector("nav img");
var rotated = false;

//This function adds the spinning CSS class to the site's logo and removes it after it has completed
//its spin so as to be able to add it again when the cursor re-enters the area.
function rotara() {
    if (!rotated) {
        logo.classList.add("rotaraki");
        rotated = !rotated;
        setTimeout(function () { logo.classList.remove("rotaraki") }, 1001);
    }
}

//This function ensures that if you rapidly enter, exit and re-enter the area in which rotara() is triggered,
//rotara() won't be triggered again, causing an abrupt re-animation of the logo.
function zeroing() {
    setTimeout(function () { rotated = !rotated }, 1001)
}


function biotalogoload() {
    rotara();
    logo.classList.add("loadingbiota");
    setTimeout(function () { logo.classList.remove("loadingbiota") }, 4001);
}

// This function delays the redirection to a new page when the menu is clicked, allowing the
//loading() animation to complete.
function directing(url) {
    setTimeout(function () { window.location.href = url }, 1500)
}

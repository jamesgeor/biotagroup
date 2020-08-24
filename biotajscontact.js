var submitter = document.querySelector(".tdsubmit");
var pleaseselect = document.querySelector(".pleaseselect")

function hidesubmit() {
    submitter.style.zIndex = "-1"
}

function showsubmit() {
    submitter.style.zIndex = ""
}

function takevalue(spanaki) {
    pleaseselect.textContent = spanaki.textContent
}
let text = document.getElementById("text")
let leaf = document.getElementById("leaf")
let hill1 = document.getElementById("hill1")
let hill4 = document.getElementById("hill4")
let hill5 = document.getElementById("hill5")

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Keep text and hill1 visible and adjust its position
    if (value <= window.innerHeight) {
        text.style.marginTop = value * 2.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    } else {
        text.style.marginTop = window.innerHeight * 2.5 + 'px';
        hill1.style.top = window.innerHeight * 1 + 'px';
    }  

    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
})

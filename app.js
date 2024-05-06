const countText = document.querySelector(".countText")

let count = 0;

countText.innerHTML = count;

function Increment() {
    count = count + 1;
    countText.innerHTML = count
}

function resetCount() {
    count = 0;
    countText.innerHTML=count
}


const sidebar = document.querySelector("aside");
const sidebar_wrapper = document.querySelector(".sidibar_wrapper")

function openSidebar() {
    sidebar_wrapper.style.displey = "flex";
    sidebar.styke.left = 0; 
}

function colosiSidebar() {
    sodebar
}
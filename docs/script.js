const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const body = document.querySelector("body");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disablescroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disablescroll");
}

const navBar = document.querySelector(".navbar");

window.onscroll = ()=>{
    this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky"); 
}



// JavaScript Document
console.log("hi");

// //////////////////////////////////
// 🔍🔍🔍 SEARCH BAR VARIABLES 🔍🔍🔍
// //////////////////////////////////

var zoekbalk = document.querySelector(".searchbar");
var zoekbalkSluiten = document.querySelector("#close");
var zoekbalkGeklikt = document.querySelector("#searchbar-open");

// ////////////////////////////
// 💗💗💗 MENU VARIABLES 💗💗💗
// ////////////////////////////

var hamburgerButton = document.querySelector(".hamburger");
var afsluitenButton = document.querySelector(".afsluiten");
var menuOpen = document.querySelector("#menu-open");

// 
// 

console.log(zoekbalk);

zoekbalk.addEventListener("click", function() {
    console.log("zoekbalk open");
    zoekbalkGeklikt.classList.toggle("hidden");
})

zoekbalkSluiten.addEventListener("click", function () {
    zoekbalkGeklikt.classList.toggle("hidden");
})

// ////////////////////////////////////////////
// 👀👀👀 MENU OPEN EN SLUITEN MET CLICK 👀👀👀
// ////////////////////////////////////////////

console.log(menuOpen);

hamburgerButton.addEventListener("click", function () {
    console.log("menu werkt!");
    menuOpen.classList.toggle("hidden");
})

afsluitenButton.addEventListener("click", function () {
    menuOpen.classList.toggle("hidden");
})
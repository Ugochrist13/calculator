
const container = document.querySelector(".container");
const timeNBar = document.querySelectorAll(".time, .bars");
const lightCont = document.querySelector(".light-cont");
const inpNAns = document.querySelectorAll(".inp1, .inp3, .ans");
const grid = document.querySelectorAll(".green, .red, .one");
const buttns = document.querySelectorAll(".oneb");
const colButtns = document.querySelectorAll(".redb, .greenb");
const slide = document.querySelector(".slide");
const sunButn = document.querySelector(".sun")
const moonButn = document.querySelector(".moon")

let theme = true;
// moonButn.style.display = "none"

moonButn.addEventListener("click", function(conts) {
    container.style.background = "#292036";
    container.style.border = "none"
    timeNBar.forEach(conts => {
        conts.style.background = "#272833";
        conts.style.color = "white";
    })
    lightCont.style.background = "#272833";
    sunButn.style.display = "block"
    sunButn.style.color = "white";
    sunButn.style.transform = "translateY(-10px)"
    sunButn.style.fontWeight = "900";
    sunButn.style.fontSize = "1.3em";
    moonButn.style.color = "gray";
    moonButn.style.transform = "translateY(0px)"
    moonButn.style.fontWeight = "100";
    moonButn.style.fontSize = "1.1em";
    // moonButn.style.display = "none";
    inpNAns.forEach(conts => {
        conts.style.color = "white";
    })
    grid.forEach(conts => {
        conts.style.background = "#272833";
    })
    buttns.forEach(conts => {
        conts.style.background = "#272833";
        conts.style.color = "white";
    })
    colButtns.forEach(conts => {
        conts.style.background = "#272833";
    })
    slide.style.background = "#272833";

    theme = true;
});

sunButn.addEventListener("click", function(conts) {
    if (theme) {
        container.style.background = "white";
        container.style.border = "solid"
        timeNBar.forEach(conts => {
            conts.style.background = "white";
            conts.style.color = "black";
        })
        lightCont.style.background = "lightgray";
        // sunButn.style.display = "none"
        sunButn.style.color = "gray";
        sunButn.style.fontWeight = "100";
        sunButn.style.transform = "translateY(0px)"
        sunButn.style.fontSize = "1.1em";
        // moonButn.style.display = "block"
        moonButn.style.color = "black";
        moonButn.style.transform = "translateY(-10px)"
        moonButn.style.fontWeight = "900";
        moonButn.style.fontSize = "1.3em";
        inpNAns.forEach(conts => {
            conts.style.color = "black";
        })
        grid.forEach(conts => {
            conts.style.background = "lightgray";
        })
        buttns.forEach(conts => {
            conts.style.background = "lightgray";
            conts.style.color = "black";
        })
        colButtns.forEach(conts => {
            conts.style.background = "lightgray";
        })
        slide.style.background = "lightgray";

        theme = false;

    }else{
        moonButn.addEventListener();
    }
});
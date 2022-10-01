
let pressed = 0;

const container = document.querySelector(".container");
const timeNBar = document.querySelectorAll(".time, .bars");
const time = document.querySelector(".timer");
const lightCont = document.querySelector(".light-cont");
const input = document.querySelector(".display");
const ans = document.querySelector(".ans");
const grid = document.querySelectorAll(".green, .red, .white");
const buttns = document.querySelectorAll(".white");
const colButtns = document.querySelectorAll(".redb, .greenb");
const slide = document.querySelector(".slide");
const clear = document.querySelector(".clear");
const optrs = document.querySelectorAll(".oprtrs");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const sunButn = document.querySelector(".sun")
const moonButn = document.querySelector(".moon")
const btns = document.querySelectorAll(".inps")


let theme = false

if(localStorage.getItem("themes") == null){
    let data = JSON.stringify(theme)
    localStorage.setItem("themes", data)
}else{
    let data = JSON.parse(localStorage.getItem("themes"))
    theme = data
}

if (theme == true) {

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
}else{ 
    
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
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        ans.innerText = ""
        input.value += btn.innerText
    })
})

optrs.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(input.value != ""){
            input.value += btn.innerText
        }
    })
})

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
        data = JSON.stringify(theme)
        localStorage.setItem("themes", data)
});

sunButn.addEventListener("click", function(conts) {
    if (theme == true) {
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
        data = JSON.stringify(theme)
        localStorage.setItem("themes", data)

    }else{
        moonButn.addEventListener();
    }
});

clear.addEventListener("click", function(){
    input.value = ""
    ans.innerText = ""
})

del.addEventListener("click", function(){
    input.value = input.value.substr(0, (input.value.length-1))
})


equal.addEventListener("click", function(){
    // pressed = 1;
        let soln = eval(input.value)
        ans.innerText = soln;
        input.value = ""
})

setInterval(function(){
    let d = new Date()
    time.innerText = d.toLocaleTimeString()
}, 1000)
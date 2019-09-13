const burger = document.querySelector('#burger');
const burgeer = document.querySelector('#burger2');
const open = document.querySelector('#open');
const nav = document.querySelector('#nav_lat');
const red = document.querySelector('#red_part');
const reed = document.querySelector('#red_part2');
const grey = document.querySelector('#grey_part');
const white = document.querySelector('#grey_white');


// burger.onclick = function(){
// open.classList.toggle('hide');
// burger.classList.toggle('hide');
// nav.classList.toggle('hide');
// }


burger.addEventListener("click", function () {
    grey.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(100%)" }
    ], { duration: 500 });
    red.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(150%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "none";
        grey.style.display = "none";
        reed.style.display = "block";
        white.style.display = "block";
    }, 500);
})
burgeer.addEventListener("click", function () {
    white.animate([
        { transform: "translateX(100%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    reed.animate([
        { transform: "translateX(150%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "block";
        grey.style.display = "block";
        reed.style.display = "none";
        white.style.display = "none";
    }, 500);
})
burger.addEventListener("touch", function () {
    grey.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(100%)" }
    ], { duration: 500 });
    red.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(150%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "none";
        grey.style.display = "none";
        reed.style.display = "block";
        white.style.display = "block";
    }, 600);
})
burgeer.addEventListener("touch", function () {
    white.animate([
        { transform: "translateX(100%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    reed.animate([
        { transform: "translateX(150%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "block";
        grey.style.display = "block";
        reed.style.display = "none";
        white.style.display = "none";
    }, 600);
})
burger.addEventListener("keypress", function () {
    grey.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(100%)" }
    ], { duration: 500 });
    red.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(150%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "none";
        grey.style.display = "none";
        reed.style.display = "block";
        white.style.display = "block";
    }, 600);
})
burgeer.addEventListener("keypress", function () {
    white.animate([
        { transform: "translateX(100%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    reed.animate([
        { transform: "translateX(150%)" },
        { transform: "translateX(0%)" }
    ], { duration: 500 });
    setTimeout(function () {
        red.style.display = "block";
        grey.style.display = "block";
        reed.style.display = "none";
        white.style.display = "none";
    }, 600);
})
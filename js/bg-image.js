const body=document.querySelector("body");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber=rand(0,4);

body.style.backgroundImage=`url("img/${randomNumber}.jpg")`;

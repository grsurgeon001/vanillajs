const body=document.querySelector("body");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const today = new Date();
const dayCode = {
    year : today.getFullYear(),
    month : today.getMonth(),
    date : today.getDate(),
} 

console.log(dayCode);

const storedBgImg = {
    storedId : dayCode,
    imageUrl :
}
if (localStorage.getItem("today-bg")){
    body.style.backgroundImage= ;
} else {
    const randomNumber=rand(0,4);
    localStorage.setItem("today-bg",`url("img/${randomNumber}.jpg")`)
    body.style.backgroundImage=`url("img/${randomNumber}.jpg")`;
}



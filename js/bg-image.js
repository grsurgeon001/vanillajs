const body=document.querySelector("body");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getDay = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const day_code = `${year}-${month}-${date}`;
    return day_code;
}

const day_code_now = getDay();
if (JSON.parse(localStorage.getItem("today'sBGI"))===null){
    const randomNumber=rand(0,4);
    const BG_URL = `url("img/${randomNumber}.jpg")`;
    body.style.backgroundImage=BG_URL;
    const bg_info = { 
        "day_code": getDay(),
        "img_url" : BG_URL,
    }
    localStorage.setItem("today'sBGI",JSON.stringify(bg_info));
} else {
    // const stored_day_code = JSON.parse(localStorage.getItem("today'sBGI")).day_code;
    const stored_BGI = JSON.parse(localStorage.getItem("today'sBGI")).img_url;
    body.style.backgroundImage=stored_BGI;
}

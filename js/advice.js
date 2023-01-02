const advice_message = document.querySelector(".advice_message");
const advice_author = document.querySelector(".advice_author");
const advice_author_profile = document.querySelector(".advice_author_profile");

const random_adv_category = rand(0,2);
const length = advice_set[random_adv_category].length;
const random_adv_message = rand(0,length-1);

const chosen_advice = advice_set[random_adv_category][random_adv_message];
const chosen_author = chosen_advice.author;
const chosen_author_profile = chosen_advice.authorProfile;
const chosen_message = chosen_advice.message;

advice_message.innerText = chosen_message;
advice_author.innerText = chosen_author;
advice_author_profile.innerText = chosen_author_profile;


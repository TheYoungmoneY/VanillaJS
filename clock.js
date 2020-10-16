const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  calenderTitle = clockContainer.querySelector("h3");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds(),
    years = date.getFullYear(),
    months = date.getMonth(),
    days = date.getDay();

  calenderTitle.innerText = `${years}년 ${months}월 ${days}일`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

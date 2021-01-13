"use strict";
//elements on website:
const modal = document.querySelector(".modal");
const button1 = document.getElementById("button1");
const closeBtn = document.querySelector(".close");
//Functions:

//Click 'Dont be pussy' button function:

button1.addEventListener("click", function () {
  let first = Math.trunc(Math.random() * 100) + 1;
  let second = Math.trunc(Math.random() * 100) + 1;
  let ask = prompt(`what is ${first} * ${second}?`);
  let answer = first * second;
  if (ask == answer) {
    modal.classList.remove("hidden");
  }
});

//Click close modal button function:

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

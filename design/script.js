"use strict";
// ! FOR LESSONS NAMES //
// ? FOR REGULAR COMMENTS //
const rates = document.querySelectorAll(".rate");
let userSelected = false;
const submitBtn = document.querySelector(".btn");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const answerRate = document.querySelector(".rate-selected");

rates.forEach(function (rate) {
   rate.addEventListener("click", function () {
      removeSelected();
      rate.classList.toggle("selected");

      const answer = rate.getAttribute("data-id");
      answerRate.innerHTML = `You selected ${answer} out of 5`;
      userSelected = true;
   });
});

function removeSelected() {
   rates.forEach(function (rate) {
      rate.classList.remove("selected");
   });
}

submitBtn.addEventListener("click", function () {
   if (userSelected) {
      front.classList.toggle("hidden");
      back.classList.toggle("hidden");
   } else {
      alert("Please select a rate before submitting");
   }
});

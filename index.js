const btn_submit = document.querySelector(".btn_submit");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const rating_btns = document.querySelectorAll(".rating_btns");
const score = document.querySelector(".score");
let rate = 0;

btn_submit.addEventListener("click", onSubmit);
rating_btns.forEach((rating_btn) => {
  rating_btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  card1.classList.add("hide");
  // score.textContent = stars_score;
  card2.classList.remove("hide");
  //   console.log("submit click");
}

// const evt = handleRatingBtnClick;

// const displayRate = document.getElementsByClassName(".rating_btn");

function handleRatingBtnClick(evt) {
  rating_btns.forEach((rating_btn) => {
    rating_btn.classList.remove("active");
  });
}

function displayRate(evt) {
  document.getElementByClass(".rating_btn").innerHTML = `${evt.rating_btn}`;
}

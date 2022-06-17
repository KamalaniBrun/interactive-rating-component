const btn_submit = document.querySelector(".btn_submit");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const rating_btns = document.querySelectorAll(".rating_btns");
const score = document.querySelector(".score");

btn_submit.addEventListener("click", onSubmit);
rating_btns.forEach((rating_btn) => {
  rating_btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  card1.classList.add("hide");
  //   score.textContent = stars_score;
  card2.classList.remove("hide");
  //   console.log("submit click");
}

function handleRatingBtnClick(evt) {
  rating_btns.forEach((rating_btn) => {
    rating_btn.classList.remove("active");
  });

  //   if (evt.target.classlist.contains("rating_btn")) {
  //     evt.target.classList.add("active");
  //   } else {
  //     evt.target.parentElement.classList.add("active");
  //   }
  //   console.log("rating btn click");
}

// stars_score = evt.target.textContent;

// console.log(rating_btns);

const cards = document.querySelectorAll(".card");

let [isFlipped, firstCard, secondCard, currentScore, totalScore] = [
  false,
  null,
  null,
  0,
  8,
];

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

let checkIt = async () => {
  if (firstCard.dataset.image === secondCard.dataset.image && firstCard.style.order !== secondCard.style.order) {
    success();
  } else {
    fail();
  }
};

let success = async () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  currentScore += 1;
  document.querySelector(
    ".score"
  ).innerText = `Score : ${currentScore.toString()} in 8 🎉`;
  if (currentScore === totalScore) {
    document.querySelector(".score").innerText = `Congratulations 🎉🎉`;
    setTimeout(() => {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }, 2000);
  }
  reset();
};

let fail = async () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 400);
};

let reset = async () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

let shuffle = async () => {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};

// shuffle();
window.addEventListener("load", () => {
  shuffle();
});

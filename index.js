const cards = document.querySelectorAll(".card");
console.log(cards);

// variable
let isFlipped = false;
let firstCard;
let secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  // console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  // console.log("Success!");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  // console.log("Fail!");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// flexbox type
function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

shuffle();

//TODO:
// make all arrow function
// destructering
// shuffle function make windows.load
// fix bugs

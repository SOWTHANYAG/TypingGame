const words=[
  "apple",      "banana",     "cherry",   "date",         "elderberry", "fig",        "grape",       "honeydew",
  "kiwi",       "lemon",      "mango",    "nectarine",    "orange",     "papaya",     "quince",      "raspberry",
  "strawberry", "tangerine",  "ugli",     "vanilla",      "watermelon", "xigua",      "yam",         "zucchini",
  "apricot",    "blueberry",  "coconut",  "dragonfruit",  "eggplant",   "feijoa",     "guava",       "hackberry",
  "indigo",     "jackfruit",  "kumquat",  "lime",         "mulberry",   "nectar",     "olive",       "peach",
  "pear",       "pineapple",  "plum",      "pomegranate", "radish",     "spinach",    "tomato",      "turnip",
  "acai",       "bilberry",   "cranberry", "durian",      "endive",     "grapefruit", "horseradish", "iceberg",
  "jalapeno",   "kale",       "lychee",    "mandarin",    "nutmeg",     "okra",       "persimmon",   "quinoa",
  "rhubarb",    "shallot",    "thyme",     "upland",      "vinegar",    "wasabi",     "yogurt",      "zest",
  "almond",     "basil",      "cashew",    "dill",        "edamame",    "fennel",     "garlic",      "hazelnut",
  "icecream",   "jam",        "ketchup",   "lasagna",     "mint",       "noodle",     "onion",       "pasta",
  "quail",      "rice",       "salt",      "tea",         "udon",       "vanilla",    "waffle",      "xanthan",
  "yeast",      "zinger",     "bamboo",    "cabbage",     "daikon",     "eclair",     "fondue",      "ginger"
]
let time = 0;
let count = 0;
let timerId = null;

const timerDisplay = document.getElementById("timer");
const countDisplay = document.getElementById("counter");
const inputBox = document.querySelector("input");
const wordDisplay = document.getElementById("worddisplay");

function updateCount() {
  if (inputBox.value.trim().toLowerCase() === wordDisplay.innerText.trim().toLowerCase()) {
    count++; // Increase score
    countDisplay.innerText = count;
    inputBox.value = ""; // Clear input
    showRandomWord(); // Show next word
  }
}
function startTimer() {
  if (timerId === null) {
    time = 0; // ✅ Reset time to 0
    timerDisplay.innerText = time;

    inputBox.disabled = false;
    inputBox.value = "";
    count = 0;
    countDisplay.innerText = count;

    showRandomWord(); // Show the first word
    inputBox.addEventListener("input", updateCount);

    timerId = setInterval(() => {
      time++;
      timerDisplay.innerText = time;
      if (time >= 45) {
  clearInterval(timerId);
  timerId = null;
  inputBox.disabled = true;
const gameOverMsg = document.getElementById("game-over");
const gameOverText = document.getElementById("game-over-text");

gameOverMsg.style.display = "block";
gameOverText.innerText = "⏰ Game Over! Your final score is: " + count;

}
    }, 1000);
  }
}


function showRandomWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.innerText = randomWord;
}

function restartTimer() {
  const confirmRestart = confirm("Do you want to start the game?");
  if (!confirmRestart) return; // Exit if user clicks Cancel

  // Stop the timer if it's running
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }

  // Reset time and count
  time = 0;
  count = 0;

  timerDisplay.innerText = time;
  countDisplay.innerText = count;

  // Enable input and clear it
  inputBox.disabled = false;
  inputBox.value = "";

  // Show new word
  showRandomWord();

  // Avoid duplicate listeners
  inputBox.removeEventListener("input", updateCount);
  inputBox.addEventListener("input", updateCount);

  // Start the timer again
  timerId = setInterval(() => {
    time++;
    timerDisplay.innerText = time;

    if (time >= 45) {
      clearInterval(timerId);
      timerId = null;
      inputBox.disabled = true;
      alert("Time's up! Your score is: " + count);
    }
  }, 1000);
}

function closeGameOver() {
  document.getElementById("game-over").style.display = "none";
}



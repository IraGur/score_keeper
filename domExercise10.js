const p1Button = document.getElementById("p1");
const p2Button = document.getElementById("p2");
const resetButton = document.getElementById("reset");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");

const winningScore = 5;
let p1Score = 0;
let p2Score = 0;
let gameOver = false;

const changeColors = (reset) => {
   if (reset) {
      p1Display.style.color = "black";
      p2Display.style.color = "black";
   } else {
      if (p1Score > p2Score) {
         p1Display.style.color = "green";
         p2Display.style.color = "red";
      } else {
         p2Display.style.color = "green";
         p1Display.style.color = "red";
      }
   }
};

const toggleButtons = (value) => {
   p1Button.disabled = value;
   p2Button.disabled = value;
};

const finishGame = () => {
   gameOver = true;
   changeColors();
   toggleButtons(true);
};

const reset = () => {
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   gameOver = false;
   changeColors(true);
   toggleButtons(false);
};

p1Button.addEventListener("click", () => {
   p1Score++;
   p1Display.textContent = p1Score;
   if (p1Score + p2Score === winningScore) {
      finishGame();
   }
});

p2Button.addEventListener("click", () => {
   p2Score++;
   p2Display.textContent = p2Score;
   if (p1Score + p2Score === winningScore) {
      finishGame();
   }
});

resetButton.addEventListener("click", () => {
   reset();
});

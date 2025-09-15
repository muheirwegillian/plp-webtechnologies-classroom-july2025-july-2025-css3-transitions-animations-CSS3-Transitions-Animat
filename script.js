// --- Part 2: JavaScript Functions (Parameters, Scope, Return) ---

// Global scope message
let dogMessage = "Dogs live about 7 human years per 1 dog year.";

// Function with parameter & return
function calculateDogAge(dogYears) {
  return dogYears * 7;
}

// Function using DOM
function showDogAge() {
  let years = parseFloat(document.getElementById("dogYears").value);

  if (isNaN(years) || years < 0) {
    document.getElementById("dogResult").textContent = "🐾 Please enter a valid age!";
    return;
  }

  let humanAge = calculateDogAge(years);

  document.getElementById("dogResult").textContent =
    `🐶 Your dog is about ${humanAge} human years old! | ${dogMessage}`;
}

// --- Part 3: Combining CSS + JS ---

function toggleAnimation() {
  const puppy = document.getElementById("puppyBox");
  puppy.classList.toggle("animate");
}

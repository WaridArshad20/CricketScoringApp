let totalScoreEl = document.getElementById("total-score");
let oversEl = document.getElementById("overs");
let timelineEl = document.getElementById("score-timeline");

let totalScore = 0;
let balls = 0;
let overs = 0;
let scoreTimeline = [];

// Function to update the overs and timeline
function updateOvers(scoreType, scoreValue) {
  balls += 1;
  if (balls === 6) {
    overs += 1;
    balls = 0;
  }
  oversEl.textContent = `Overs: ${overs}.${balls}`;

  // Update the score timeline
  scoreTimeline.push(
    `Over: ${overs}.${balls} - ${scoreType}: ${scoreValue} runs`
  );
}

// Function to display the score timeline
function showTimeline() {
  timelineEl.style.display = "block";
  timelineEl.innerHTML = ""; // Clear previous content
  scoreTimeline.forEach((event) => {
    let p = document.createElement("p");
    p.textContent = event;
    timelineEl.appendChild(p);
  });
}

// Scoring functions
function six() {
  totalScore += 6;
  totalScoreEl.textContent = totalScore;
  updateOvers("6", 6);
}

function four() {
  totalScore += 4;
  totalScoreEl.textContent = totalScore;
  updateOvers("4", 4);
}

function wide() {
  totalScore += 1;
  totalScoreEl.textContent = totalScore;
  scoreTimeline.push(`Over: ${overs}.${balls} - WD: 1 extra`);
}

function one() {
  totalScore += 1;
  totalScoreEl.textContent = totalScore;
  updateOvers("1", 1);
}

function two() {
  totalScore += 2;
  totalScoreEl.textContent = totalScore;
  updateOvers("2", 2);
}

function noBall() {
  totalScore += 1;
  totalScoreEl.textContent = totalScore;
  scoreTimeline.push(`Over: ${overs}.${balls} - NB: 1 extra`);
}

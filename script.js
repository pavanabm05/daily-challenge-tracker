// 🎯 Challenges list
const challenges = [
  "Write one creative idea for an app 📱",
  "Solve 1 coding problem 💻",
  "Learn 1 new JavaScript concept ⚡",
  "Read 5 pages of a tech book 📖",
  "Watch 1 educational video 🎥",
  "Improve your project UI 🎨",
  "Practice HTML/CSS for 30 mins 🌐",
];

// 📌 Elements
const challengeElement = document.getElementById("challenge");
const streakElement = document.getElementById("streak");
const completeBtn = document.getElementById("completeBtn");
const lastChallengeElement = document.getElementById("lastChallenge");

// 📅 Today
let today = new Date().toDateString();

// ==========================
// 🎯 DAILY CHALLENGE (FIXED)
// ==========================

let storedDate = localStorage.getItem("challengeDate");
let savedChallenge = localStorage.getItem("dailyChallenge");

if (storedDate === today && savedChallenge) {
  challengeElement.textContent = savedChallenge;
} else {
  let randomIndex = Math.floor(Math.random() * challenges.length);
  let todayChallenge = challenges[randomIndex];

  localStorage.setItem("dailyChallenge", todayChallenge);
  localStorage.setItem("challengeDate", today);

  challengeElement.textContent = todayChallenge;
}

// ==========================
// 🔥 LOAD DATA
// ==========================

let streak = parseInt(localStorage.getItem("streak")) || 0;
let lastCompletedDate = localStorage.getItem("lastCompletedDate");
let lastChallenge = localStorage.getItem("lastChallenge");

streakElement.textContent = streak;

// Show last completed
if (lastChallenge) {
  lastChallengeElement.textContent = "Last Completed: " + lastChallenge;
}

// ==========================
// ✅ COMPLETED BUTTON
// ==========================

completeBtn.addEventListener("click", function () {
  let todayChallenge = challengeElement.textContent;

  if (lastCompletedDate === today) {
    alert("You already completed today's challenge ✅");
    return;
  }

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastCompletedDate === yesterday.toDateString()) {
    streak++;
  } else {
    streak = 1;
  }

  // 💾 Save everything properly
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastCompletedDate", today);
  localStorage.setItem("lastChallenge", todayChallenge);

  // 🖥️ Update UI
  streakElement.textContent = streak;
  lastChallengeElement.textContent = "Last Completed: " + todayChallenge;
});

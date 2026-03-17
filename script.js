// 🎯 Challenges list
const challenges = [
  "Drink 2 liters of water today 💧",
  "Walk 8000+ steps 🚶",
  "Read 10 pages of a book 📖",
  "Learn something new for 20 minutes 🧠",
  "No social media for 2 hours 📵",
  "Wake up before 7 AM 🌅",
  "Write down 3 goals for today 🎯",
  "Help someone today 🤝",
  "Do 15 minutes of exercise 🏋️",
  "Meditate for 10 minutes 🧘",
  "Clean your workspace 🧹",
  "Practice coding for 30 minutes 💻",
  "Watch an educational video 🎥",
  "Eat healthy food today 🥗",
  "Sleep before 11 PM 😴",
];

// 📌 Elements
const challengeElement = document.getElementById("challenge");
const streakElement = document.getElementById("streak");
const completeBtn = document.getElementById("completeBtn");

// 📅 Today's date
let today = new Date().toDateString();

// ==========================
// 🎯 DAILY CHALLENGE
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
// 🔥 STREAK DISPLAY
// ==========================

let savedStreak = localStorage.getItem("streak") || 0;
streakElement.textContent = savedStreak;

// ==========================
// ✅ COMPLETED BUTTON
// ==========================

completeBtn.addEventListener("click", function () {
  let lastCompletedDate = localStorage.getItem("lastCompletedDate");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  // 🚫 Prevent multiple clicks same day
  if (lastCompletedDate === today) {
    alert("You already completed today's challenge ✅");
    return;
  }

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // 🔥 Streak logic
  if (lastCompletedDate === yesterday.toDateString()) {
    streak++;
  } else {
    streak = 1;
  }

  // 💾 Save
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastCompletedDate", today);

  // 🖥️ Update UI
  streakElement.textContent = streak;
});

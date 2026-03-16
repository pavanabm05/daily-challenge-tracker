console.log("Daily Challenge Tracker started");

const challenges = [
  "Learn one keyboard shortcut you didn’t know 💻",
  "Do 20 jumping jacks to refresh your mind ⚡",
  "Write one idea for a future startup 💡",
  "Teach someone one thing you learned today 🎓",
  "Read about one new technology for 10 minutes 🤖",
  "Write down 3 things you are grateful for 🙏",
  "Drink a full glass of water right now 💧",
  "Organize one small area of your room 🧹",
  "Listen to a motivational talk 🎧",
  "Write a positive message to a friend 📩",
  "Learn one new English word and use it in a sentence 🧠",
  "Spend 5 minutes stretching your body 🧘",
  "Think of one problem around you and a tech solution 🔧",
  "Watch a short educational video 📚",
  "Write tomorrow’s top 3 priorities 📝",
  "Spend 10 minutes learning coding 💻",
  "Go outside and take 10 deep breaths 🌿",
  "Reduce social media usage for 30 minutes 📵",
  "Help someone with a small task 🤝",
  "Write one creative idea for an app 📱",
  "Read one interesting fact about science 🔬",
  "Write a short journal about your day ✍️",
  "Try to memorize a short quote 📖",
  "Practice typing speed for 5 minutes ⌨️",
  "Clean your study table before starting work 📂",
];
let savedChallenge = localStorage.getItem("dailyChallenge");

if (savedChallenge) {
  document.getElementById("challenge").textContent = savedChallenge;
} else {
  let randomIndex = Math.floor(Math.random() * challenges.length);

  let todayChallenge = challenges[randomIndex];

  localStorage.setItem("dailyChallenge", todayChallenge);

  document.getElementById("challenge").textContent = todayChallenge;
}

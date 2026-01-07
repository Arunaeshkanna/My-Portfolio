// Typing Effect Function
function typeEffect(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Run typing effect for name and role
document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("name");
  const roleEl = document.getElementById("role");

  const nameText = "Arunaesh Kanna A K";
  const roleText = "Web Developer | ML Engineer | Coder";

  nameEl.innerHTML = "";
  roleEl.innerHTML = "";

  // First type name, then role
  typeEffect(nameEl, nameText, 120);
  setTimeout(() => typeEffect(roleEl, roleText, 80), nameText.length * 120 + 500);

  // Dynamic Background Gradient for Hero Section
  const hero = document.querySelector(".hero");

  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #ff6a00, #ee0979)",
    "linear-gradient(135deg, #36d1dc, #5b86e5)",
    "linear-gradient(135deg, #11998e, #38ef7d)"
  ];

  let index = 0;
  setInterval(() => {
    hero.style.background = gradients[index];
    index = (index + 1) % gradients.length;
  }, 4000); // changes every 4 sec
});
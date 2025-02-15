// script.js

const skills = [ " Robotics Engineer", " CAD Designer", " Test Engineer", " Mechanical Engineer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

function typeEffect() {
    const skill = skills[index];

    if (!isDeleting) {
        currentText = skill.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === skill.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        currentText = skill.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % skills.length;
        }
    }

    typingElement.textContent = currentText;
    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();

    setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
    }, 500);
});

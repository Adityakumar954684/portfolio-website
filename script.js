

document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");

        // अगर href "#" या कोई ID target कर रहा है, तो smooth scroll करें
        if (targetId.startsWith("#")) {
            event.preventDefault();
            const targetElement = document.getElementById(targetId.substring(1));

            if (targetElement) {
                const offset = 120; // Navbar height के अनुसार एडजस्ट करें
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        }
        // अगर external link (mailto, GitHub, LinkedIn) है, तो allow करें
    });
});


const roles = ["Data Analyst", "Frontend Developer"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".dynamic-role");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});





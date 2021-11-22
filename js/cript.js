//preloader
let loader;
const loadNow = (opacity) => {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 70);
    }
}

;
const displayContent = () => {
    loader.style.display = "none";
    document.getElementById("wrapper").style.display = "block";
}

;
document.addEventListener("DOMContentLoaded", () => {
        loader = document.getElementById("loader");
        loadNow(1);
    }

);
//navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards $ {
                    index / 7 + 0.5
                }
                s`;
            }
        });
        burger.classList.toggle("toggle");
    });
}

;
navSlide();
//typewriter
const textDisplay = document.getElementById("text");
const phrases = ["Web Developer",
    "Technical Writer",
    "Tech Architect",
    "Casual Gamer"
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join("");
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = currentPhrase.join("");
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            textDisplay.innerHTML = currentPhrase.join("");
        }
        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    //controling the speed of typing
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();
// scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
}

;
//observer
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }

    , appearOptions);
faders.forEach((fader) => {
        appearOnScroll.observe(fader);
    }

);
//hidden
// const hide = () => {
//   document.getElementById("title").textContent = "Read it on DEV";
// };
// const reveal = () => {
//   document.getElementById("title").textContent = "dev";
// };
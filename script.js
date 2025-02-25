document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-box");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();

    // Générer les lucioles ✨
    const fireflyContainer = document.getElementById("fireflies");

    function createFirefly() {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");

        // Position aléatoire
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        // Animation avec un délai aléatoire
        firefly.style.animationDelay = `${Math.random() * 4}s`;
        fireflyContainer.appendChild(firefly);

        // Supprimer après un moment et recréer
        setTimeout(() => {
            firefly.remove();
            createFirefly();
        }, 4000);
    }

    // Créer plusieurs lucioles au départ
    for (let i = 0; i < 20; i++) {
        createFirefly();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-box");
    const themeToggle = document.getElementById("theme-toggle");
    const increaseText = document.getElementById("increase-text");
    const decreaseText = document.getElementById("decrease-text");
    const languageToggle = document.getElementById("language-toggle");

    // Vérifier et appliquer le mode enregistré
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙 Mode Sombre";
    }

    // Fonction pour changer de thème
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Mode Sombre";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Mode Clair";
        }
    });

    // Fonctionnalité pour changer la taille du texte
    let fontSize = localStorage.getItem("fontSize") ? parseInt(localStorage.getItem("fontSize")) : 16;
    document.body.style.fontSize = fontSize + "px";

    increaseText.addEventListener("click", () => {
        if (fontSize < 24) {
            fontSize += 2;
            document.body.style.fontSize = fontSize + "px";
            localStorage.setItem("fontSize", fontSize);
        }
    });

    decreaseText.addEventListener("click", () => {
        if (fontSize > 12) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
            localStorage.setItem("fontSize", fontSize);
        }
    });

    // Gestion de la langue
    const translations = {
        "fr": {
            "title": "Mon e-CV",
            "languageToggle": "🇬🇧 English",
            "projets": "Projets",
            "formation": "Formation",
            "contact": "Me contacter",
        },
        "en": {
            "title": "My e-CV",
            "languageToggle": "🇫🇷 Français",
            "projets": "Projects",
            "formation": "Education",
            "contact": "Contact Me",
        }
    };

    let currentLanguage = localStorage.getItem("language") || "fr";

    const updateLanguage = (lang) => {
        document.getElementById("title").textContent = translations[lang].title;
        languageToggle.textContent = translations[lang].languageToggle;

        document.querySelectorAll(".translatable").forEach(element => {
            element.textContent = translations[lang][element.getAttribute("href").substring(1)];
        });

        localStorage.setItem("language", lang);
    };

    updateLanguage(currentLanguage);

    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "fr" ? "en" : "fr";
        updateLanguage(currentLanguage);
    });

    // Effet d’apparition des sections
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});

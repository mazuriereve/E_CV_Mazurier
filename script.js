// Première fonction en js pour faire un effet de "lucioles sur l'écran"
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

// Deuxième mode : pour faire un mode sombre et un mode clair
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

document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById("settings-icon");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    // Afficher la barre latérale et cacher l'engrenage
    settingsIcon.addEventListener("click", function () {
        sidebar.style.display = "block"; // Afficher la barre
        setTimeout(() => {
            sidebar.classList.add("sidebar-active"); // Activer l'opacité en douceur
        }, 10);
        settingsIcon.classList.add("hidden"); // Cacher l’engrenage
    });

    // Fonction pour fermer la barre latérale proprement
    function closeSidebarMenu() {
        sidebar.classList.remove("sidebar-active"); // Retirer l’opacité
        setTimeout(() => {
            sidebar.style.display = "none"; // Cacher après l’animation
        }, 400);
        settingsIcon.classList.remove("hidden"); // Réafficher l’engrenage
    }

    closeSidebar.addEventListener("click", closeSidebarMenu);

    // Fermer la barre si on clique en dehors
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !settingsIcon.contains(event.target)) {
            closeSidebarMenu();
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");

    function checkScroll() {
        projects.forEach((project) => {
            const position = project.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                project.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    checkScroll();
});

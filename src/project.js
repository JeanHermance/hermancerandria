export function Projects() {
    const section = document.createElement('section');
    section.id = "projects";
    section.className = "projects-section";

    // Tes projets (Données éditables facilement)
    const projectData = [
        {
            id: 1,
            title: "E-Commerce App",
            description: "Une plateforme e-commerce moderne conçue avec une architecture microservices et une interface utilisateur hautement interactive.",
            image: "/icon/first.png", // Remplace par tes vraies maquettes/images
            color: "#2a3d45" // Couleur de fond associée pour l'immersion
        },
        {
            id: 2,
            title: "Task Management Tool",
            description: "Un outil SaaS de gestion de tâches collaboratif en temps réel intégrant des fonctionnalités de glisser-déposer intuitives.",
            image: "/icon/third.png",
            color: "#4e5e65"
        },
        {
            id: 3,
            title: "Health & Fitness Tracker",
            description: "Application mobile de suivi de santé connectée offrant des analyses de données avancées et des tableaux de bord interactifs.",
            image: "/icon/degree.png",
            color: "#6b5e4d"
        }
    ];

    let currentIndex = 0;

    // Structure HTML de base de la section
    section.innerHTML = `
        <!-- Conteneurs de fond pour la transition de couleur/image fluide -->
        <div class="bg-layer bg-primary-fade"></div>
        <div class="bg-layer bg-secondary-fade"></div>

        <div class="projects-container">
            <!-- Partie Gauche : Infos projet avec fond flouté -->
            <div class="project-info-panel">
                <h2 class="section-subtitle">Realizations</h2>
                <div class="info-content">
                    <h3 id="project-title" class="fade-text"></h3>
                    <p id="project-desc" class="fade-text"></p>
                </div>
                <div class="carousel-controls">
                    <button id="prev-project" class="control-btn">←</button>
                    <button id="next-project" class="control-btn">→</button>
                </div>
            </div>

            <!-- Partie Droite : Carrousel de cartes -->
            <div class="carousel-wrapper">
                <div class="carousel-track" id="carousel-track">
                    ${projectData.map((project, index) => `
                        <div class="project-card ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <div class="card-inner" style="background-image: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.4)), url('${project.image}');">
                                <span class="card-number">0${project.id}</span>
                                <h4>${project.title}</h4>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Sélection des éléments du DOM créés
    const track = section.querySelector('#carousel-track');
    const titleEl = section.querySelector('#project-title');
    const descEl = section.querySelector('#project-desc');
    const bgLayers = [section.querySelector('.bg-primary-fade'), section.querySelector('.bg-secondary-fade')];
    let activeBgLayerIndex = 0;

    // Fonction pour mettre à jour l'affichage
    function updateCarousel() {
        const activeProject = projectData[currentIndex];

        // 1. Mise à jour des textes à gauche avec un léger effet d'apparition (Fade)
        titleEl.classList.remove('visible');
        descEl.classList.remove('visible');

        setTimeout(() => {
            titleEl.textContent = activeProject.title;
            descEl.textContent = activeProject.description;
            titleEl.classList.add('visible');
            descEl.classList.add('visible');
        }, 200);

        // 2. Transition croisée du fond de section (Cross-fade)
        const nextBgLayerIndex = 1 - activeBgLayerIndex;
        bgLayers[nextBgLayerIndex].style.backgroundColor = activeProject.color;
        bgLayers[nextBgLayerIndex].style.opacity = '1';
        bgLayers[activeBgLayerIndex].style.opacity = '0';
        activeBgLayerIndex = nextBgLayerIndex;

        // 3. Mise à jour des classes actives sur les cartes du carrousel
        const cards = track.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });

        // 4. Déplacement du carrousel pour centrer la carte active
        const cardWidth = cards[0].offsetWidth + 24; // Largeur + écart (gap)
        // Sur mobile, on déplace horizontalement, sur Desktop on applique un léger décalage
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    // Gestionnaires d'événements pour les boutons
    section.querySelector('#next-project').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projectData.length;
        updateCarousel();
    });

    section.querySelector('#prev-project').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projectData.length) % projectData.length;
        updateCarousel();
    });

    // Permettre de cliquer directement sur une carte pour l'activer
    track.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
            currentIndex = parseInt(card.dataset.index, 10);
            updateCarousel();
        }
    });

    // Initialiser le premier affichage
    setTimeout(updateCarousel, 50);

    return section;
}
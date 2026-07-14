export function NavBar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-container">
            <div class="logo">
                <span id="head">Hermance</span><br>
                <span id="sub-head">RANDRIA</span>
            </div>
            
            <!-- Une seule liste de liens pour le desktop ET le mobile -->
            <ul class="nav-links" id="nav-links">
                <div class="mobile-only-header">
                    <div id="close-btn">×</div>
                </div>
                <li><a href="#about" class="nav-item">ABOUT</a></li>
                <li><a href="#realisation" class="nav-item">REALISATION</a></li>
                <li><a href="#details" class="nav-item">SERVICES</a></li>
                <li><a href="#projects" class="nav-item">DEGREES</a></li>
                <li class="mobile-only-contact"><a href="#contact" class="nav-item">CALL ME</a></li>
            </ul>

            <div id="contact-desktop" class="contact-btn"><a href="#contact" class="nav-item">CALL ME</a></div>
            <div id="burger-btn">☰</div>
        </div>
        <div id="overlay"></div>
    `;

    const navLinks = nav.querySelector('#nav-links');
    const burgerBtn = nav.querySelector('#burger-btn');
    const closeBtn = nav.querySelector('#close-btn');
    const overlay = nav.querySelector('#overlay');
    const navItems = nav.querySelectorAll('.nav-item');

    // Regroupement des écouteurs d'événements
    burgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    navItems.forEach(item => item.addEventListener('click', closeMenuOnly));

    function toggleMenu() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    function closeMenuOnly() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    }

    return nav;
}
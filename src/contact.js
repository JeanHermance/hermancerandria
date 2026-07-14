export function Contact() {
    const section = document.createElement('section');
    section.id = "contact";
    section.className = "contact-section";

    section.innerHTML = `
        <div class="contact-container">
            <!-- Formulaire de Contact -->
            <div class="contact-form-container">
                <h2>Let's work together!</h2>
                <p class="contact-subtitle">Fill out the form below or just say hello.</p>
                
                <form id="portfolio-contact-form" class="contact-form">
                    <div class="form-group">
                        <input type="text" id="name" name="name" required placeholder=" ">
                        <label for="name">Your Name</label>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" required placeholder=" ">
                        <label for="email">Your Email</label>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <button type="submit" class="submit-btn">
                        <span>Send Message</span>
                        <span class="btn-icon">→</span>
                    </button>
                </form>
            </div>

            <!-- Carte Réseaux Sociaux & Infos -->
            <div class="contact-info-card">
                <div class="info-header">
                    <h3>Contact Info</h3>
                    <p>Based in Fianarantsoa, Madagascar</p>
                </div>

                <!-- Liens vers tes réseaux sociaux -->
                <div class="social-links-container">
                    <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" class="social-link" data-platform="whatsapp">
                        <img class="social-icon" src="/icon/whatsapp.svg"/>
                    </a>
                    <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" class="social-link" data-platform="linkedin">
                        <img class="social-icon" src="/icon/linkedin.svg"/>
                    </a>
                    <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="social-link" data-platform="github">
                        <img class="social-icon" src="/icon/github.svg"/>
                    </a>
                </div>

                <div class="direct-mail">
                    <span>Or email directly:</span>
                    <a href="mailto:hermancerandria@gmail.com">hermancerandria@gmail.com</a>
                </div>
            </div>
        </div>

        <!-- Footer / Copyright -->
        <footer class="portfolio-footer">
            <p>&copy; ${new Date().getFullYear()} Hermance RANDRIA. All rights reserved. Made with VanillaJS & passion.</p>
        </footer>
    `;

    // Gestion de la soumission du formulaire
    const form = section.querySelector('#portfolio-contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des données
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };

        // Exemple d'action de soumission
        console.log("Formulaire envoyé !", formData);
        
        // Petit effet feedback visuel sympa
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = "<span>Sending...</span>";
        submitBtn.style.pointerEvents = "none";

        setTimeout(() => {
            submitBtn.innerHTML = "<span>Message Sent! ✓</span>";
            submitBtn.style.backgroundColor = "#2e7d32";
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = "";
                submitBtn.style.pointerEvents = "auto";
            }, 3000);
        }, 1500);
    });

    return section;
}
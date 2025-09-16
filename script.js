document.addEventListener('DOMContentLoaded', () => {

    const sliderContainer = document.getElementById('slider-container');
    const photoSections = document.querySelectorAll('.category-section');
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    // Smooth Scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });

            // Update active link class
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

  
    

    // The Dropbox Image Retrieval Logic
    // IMPORTANT: This is a placeholder function. To make this work, you need to
    // get a Dropbox access token and set up a server-side script.
    // GitHub Pages is static and cannot directly access Dropbox due to security.
    // For a beginner, I recommend manually placing images first.
    // If you want to automate this later, you'll need a backend (like a Netlify function).
    // For now, let's use a simpler approach: fetch from local folders.
    
    async function fetchPhotosFromLocal() {
        const photoData = {
            'Portraits': [
                'Portraits/portrait1.jpg',
                'Portraits/portrait2.jpg',
                'Portraits/portrait3.jpg',
                'Portraits/portrait4.jpg',
                'Portraits/portrait5.jpg',
                'Portraits/portrait6.jpg',
                'Portraits/portrait7.jpg',
                'Portraits/portrait8.jpg',
                'Portraits/portrait9.jpg',
                'Portraits/portrait10.jpg',
                'Portraits/portrait11.jpg',
                'Portraits/portrait12.jpg',
                'Portraits/portrait13.jpg',
                'Portraits/portrait14.jpg',
                'Portraits/portrait15.jpg',
                'Portraits/portrait16.jpg',
                'Portraits/portrait17.jpg',
                'Portraits/portrait18.jpg',
                'Portraits/portrait19.jpg',
            
                // Add more portrait image paths here
            ],
            'Landscapes': [
                'Landscapes/landscape1.jpg',
                'Landscapes/landscape2.jpg',
                'Landscapes/landscape3.jpg',
                'Landscapes/landscape4.jpg',
                // Add more landscape image paths here
            ],
            'Nature': [
                'Nature/nature1.jpg',
                'Nature/nature2.jpg',
                // Add more nature image paths here
            ]
        };

        for (const [category, paths] of Object.entries(photoData)) {
            const categorySection = document.querySelector(`.category-section[data-category="${category}"] .photo-grid`);
            if (categorySection) {
                paths.forEach(path => {
                    const img = document.createElement('img');
                    img.src = path;
                    img.alt = `Photo from ${category}`;
                    img.loading = 'lazy'; // Lazy load images
                    categorySection.appendChild(img);
                });
            }
        }
    }
    
    fetchPhotosFromLocal();

    // This section is for a future enhancement if you want to use a backend
    /*
    async function fetchPhotosFromDropbox() {
        const accessToken = 'YOUR_DROPBOX_ACCESS_TOKEN';
        const url = 'https://api.dropboxapi.com/2/files/list_folder';

        const categories = ['Portraits', 'Landscapes', 'Nature'];

        for (const category of categories) {
            const path = `/${category}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ path: path })
            });

            const data = await response.json();
            const photoGrid = document.querySelector(`.category-section[data-category="${category}"] .photo-grid`);

            data.entries.forEach(entry => {
                if (entry['.tag'] === 'file' && entry.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
                    // Fetch a shareable link and display it. This requires more complex logic.
                    // For now, let's stick to the local file method.
                }
            });
        }
    }
    */
    
    // Animate sections on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    photoSections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Add CSS for hidden/visible animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .category-section.hidden {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .category-section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);
});




const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    navOverlay.classList.toggle('active');
});

// Optional: Hide the menu after a link is clicked
document.querySelectorAll('.nav-overlay a').forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Add a check to make sure the elements exist
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});





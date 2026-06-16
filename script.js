document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    function reveal() {
        var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50; // trigger earlier
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        const menuIcon = menuBtn.querySelector('i');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('bi-x');
                menuIcon.classList.add('bi-list');
            } else {
                menuIcon.classList.remove('bi-list');
                menuIcon.classList.add('bi-x');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('bi-x');
                menuIcon.classList.add('bi-list');
            });
        });
    }
});

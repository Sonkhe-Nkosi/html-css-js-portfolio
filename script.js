document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to reveal elements on scroll
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal');
        
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    // Attach scroll event
    window.addEventListener('scroll', revealOnScroll);

    // Theme toggle functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggleButton.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        themeToggleButton.textContent = isDarkMode ? '🌞' : '🌙';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});

AOS.init();

AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});



// Add smooth scrolling to Navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Add smooth scrolling to "My Work" button
document.querySelector('.bt1').addEventListener('click', () => {
    const workSection = document.getElementById('services');
    window.scrollTo({
        top: workSection.offsetTop - 50,
        behavior: 'smooth'
    });
});

// Add smooth scrolling to "Hire Me" button
document.querySelector('.bt2').addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    window.scrollTo({
        top: contactSection.offsetTop - 50,
        behavior: 'smooth'
    });
});

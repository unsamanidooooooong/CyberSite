// Typewriter effect
const subtitle = document.querySelector('.subtitle');
const text = "Modern · Minimal · Cyber Technology";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter when page loads
window.addEventListener('load', () => {
    subtitle.textContent = '';
    typeWriter();
});

// Glitch effect on h1
const glitchText = document.querySelector('h1');
setInterval(() => {
    glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
        glitchText.style.transform = 'translate(0, 0)';
    }, 50);
}, 3000);

// Cursor trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Add cursor trail style
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--accent-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 0.5s linear forwards;
    }
    
    @keyframes trailFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your smooth scroll logic here
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Button hover effects
document.querySelectorAll('.primary-btn, .secondary-btn, .login-btn, .update-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
    });
});
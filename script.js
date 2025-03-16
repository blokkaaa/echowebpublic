document.addEventListener('DOMContentLoaded', function() {
    // Fix syntax error in particles configuration
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#888888"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Initialize products section
    const productsContainer = document.querySelector('.products-container');
    
    if (productsContainer) {
        // Product data
        const products = [
            {
                icon: '🔥',
                title: 'Premium Quality',
                description: 'Our FiveM cheat is built with premium quality code, ensuring stability and performance.'
            },
            {
                icon: '🛡️',
                title: 'Undetected',
                description: 'Our FiveM cheat remains undetected with regular updates to stay ahead of anti-cheat systems.'
            },
            {
                icon: '⭐',
                title: 'Enhanced Experience',
                description: 'Our FiveM cheat ensures a smooth gaming experience, enhanced with advanced safety and security features.'
            },
            {
                icon: '🎮',
                title: 'Extreme Customization',
                description: 'Our FiveM cheat offers extreme customization options for dynamic gameplay and domination of opponents.'
            },
            {
                icon: '🔒',
                title: 'Data Protection',
                description: 'Our FiveM cheat safeguards your data and ensures confidentiality and privacy.'
            },
            {
                icon: '🚀',
                title: 'Regular Updates',
                description: 'We provide regular updates to ensure our FiveM cheat stays current with the latest game changes.'
            }
        ];
        
        // Clear any existing products
        productsContainer.innerHTML = '';
        
        // Create product cards
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-icon">${product.icon}</div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <a href="#features" class="card-btn scroll-link">Learn More</a>
            `;
            
            productsContainer.appendChild(card);
        });
    }

    // App interface mouse movement effect
    const appInterface = document.querySelector('.app-interface');
    const appContainer = document.querySelector('.app-interface-container');
    
    if (appInterface && appContainer) {
        appContainer.addEventListener('mousemove', function(e) {
            const rect = appContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 15; // -15 to 15 degrees
            const rotateX = ((centerY - y) / centerY) * 15; // -15 to 15 degrees
            
            appInterface.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            appInterface.style.transition = 'transform 0.1s ease-out';
        });
        
        appContainer.addEventListener('mouseleave', function() {
            appInterface.style.transition = 'transform 0.5s ease-out';
            appInterface.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    // Initialize features particles
    if (document.getElementById('features-particles')) {
        particlesJS('features-particles', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3.5, // Increased size by 2px
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8, // Faster movement
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: false, // Disabled click interaction
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        size: 5,
                        duration: 2,
                        opacity: 1,
                        speed: 3
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Handle loading screen completion
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        // If the loading animation is already complete
        if (loadingScreen.classList.contains('fade-out')) {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
        }
    } else {
        // If there's no loading screen, mark as loaded
        document.body.classList.add('loaded');
    }

    // Add smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
});
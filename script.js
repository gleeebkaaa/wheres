// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .stack-category, .exp-item, .pricing-item, .guarantee');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animate floating badges on load
window.addEventListener('load', () => {
    const badges = document.querySelectorAll('.floating-badge');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0)';
        setTimeout(() => {
            badge.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 300 + index * 100);
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Easter Egg Duck Animation
const duck = document.getElementById('duck');
const duckContainer = document.getElementById('duckContainer');
const duckBubble = document.getElementById('duckBubble');

let duckActive = false;

// Милая утка-рэкетир — смешные призывы
const duckPhrases = [
    "Where's the money, Lebowski? 🦆💰",
    "Кря! Вижу ты интересуешься... 👀",
    "Пссст! Бот за 5к — это выгодно! 💡",
    "Я тут мимо проходила... Заказ будешь? 🦆",
    "Кря-кря! Конкуренты не спят, а ты? 😊",
    "Эй, друг! Тыкни в Telegram, не стесняйся ⚡",
    "5000₽ и бот твой. Думаешь? Не думай! 💭❌",
    "Утка знает толк в автоматизации 🦆🤖",
    "Листаешь уже 5 минут... Заказ когда? 🤔⏰",
    "Кря! С ножиком шутить не стоит... Шучу! 😄🔪",
    "API за +5к окупится за неделю. Честно! 🚀",
    "Telegram ждёт. Я тоже жду. Все ждут! 📱⏳",
    "Бот работает 24/7. Ты спишь — он продаёт 😴💰",
    "Между нами: 5к это почти даром 🤫💸",
    "Кря-кря = выгодное предложение на утином 🦆",
    "Лендинг без заказа = грустная утка 😢",
    "20к за Business? Окупится за неделю! 📈",
    "Я с ножиком за твоим успехом слежу 🔪😊",
    "Копирайтинг включён = продажи x3! 🎯",
    "Enterprise за 50к = спокойствие на год 😌💼",
    "Кря! Жду твоего сообщения в TG! 🦆📨",
    "Утка одобряет этот заказ ✓",
    "Python + твоя идея = профит 💡💰",
    "Нож для хлеба. И для мотивации! 🔪🍞😄",
    "12 месяцев поддержки = я рядом! 🦆🛡️",
    "Кря! Тыкай скорее, стесняешься что ли? 👆",
    "Заказ = счастливая утка. Подумай! 🦆✨",
    "Git push origin 'заказ-сделан' 💻✅",
    "npm install успех --save 📦",
    "Между нами: утка не врёт 🦆💯",
    "Мониторинг 24/7 = сплю с ножом... за твой проект! 🔪😴",
    "Кря-кря! Жду в Telegram! 🦆💬",
    "5к сейчас или 50к через месяц? 🤔💰",
    "Утка гарантирует качество. Лично! 🦆✓",
    "Пока ты думаешь, утка грустит 😢🦆",
    "Заказ + утка = идеальная пара! 💕",
    "Кря! SEO-оптимизация рулит! 🦆📊",
    "Резервные копии = утка спит спокойно 😴💾",
    "Тык в Telegram и будет тебе счастье! ✨📱"
];

// Система уникальных фраз - не повторяются пока все не использованы
let usedPhrases = [];

function getRandomPhrase() {
    if (usedPhrases.length === duckPhrases.length) {
        usedPhrases = []; // Сброс когда все использованы
    }
    
    const availablePhrases = duckPhrases.filter(p => !usedPhrases.includes(p));
    const phrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    usedPhrases.push(phrase);
    return phrase;
}

// Walk animation - из разных углов в разные
function startDuckWalk() {
    if (duckActive) return;
    duckActive = true;

    // Random corners: 0=bottom-left, 1=bottom-right, 2=top-right, 3=top-left
    const startCorner = Math.floor(Math.random() * 4);
    let endCorner;
    do {
        endCorner = Math.floor(Math.random() * 4);
    } while (endCorner === startCorner);
    
    function getCornerCoords(corner) {
        const offset = 150;
        const margin = 80;
        switch(corner) {
            case 0: return { x: -offset, y: margin + Math.random() * 100 };
            case 1: return { x: window.innerWidth + offset, y: margin + Math.random() * 100 };
            case 2: return { x: window.innerWidth + offset, y: window.innerHeight - margin - Math.random() * 100 };
            case 3: return { x: -offset, y: window.innerHeight - margin - Math.random() * 100 };
        }
    }
    
    const start = getCornerCoords(startCorner);
    const end = getCornerCoords(endCorner);
    
    duckContainer.style.bottom = start.y + 'px';
    duckContainer.style.left = start.x + 'px';
    duck.classList.add('walking');
    
    // Flip based on direction
    if (end.x > start.x) {
        duck.classList.remove('flip');
    } else {
        duck.classList.add('flip');
    }
    
    duckBubble.textContent = getRandomPhrase();
    duckBubble.classList.add('show');
    
    const duration = 8000 + Math.random() * 5000;
    const startTime = Date.now();
    let lastPhraseChange = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        if (Date.now() - lastPhraseChange > 3500) {
            duckBubble.textContent = getRandomPhrase();
            lastPhraseChange = Date.now();
        }
        
        if (progress < 1) {
            const currentX = start.x + (end.x - start.x) * progress;
            const currentY = start.y + (end.y - start.y) * easeProgress;
            
            duckContainer.style.left = currentX + 'px';
            duckContainer.style.bottom = currentY + 'px';
            
            requestAnimationFrame(animate);
        } else {
            duck.classList.remove('walking');
            duckBubble.classList.remove('show');
            duckActive = false;
            scheduleDuckAction();
        }
    }
    
    animate();
}

// Peek animation - выглядывает из-за угла
function startDuckPeek() {
    if (duckActive) return;
    duckActive = true;

    // Random corner: 0=bottom-left, 1=bottom-right
    const corner = Math.floor(Math.random() * 2);
    
    let startX, endX, fixedY;
    
    switch(corner) {
        case 0: // bottom-left - выглядывает слева
            startX = -120;
            endX = 40; // Больше видна, чтобы фраза поместилась
            fixedY = 20 + Math.random() * 100;
            duck.classList.remove('flip');
            break;
        case 1: // bottom-right - выглядывает справа
            startX = window.innerWidth + 120;
            endX = window.innerWidth - 140; // Больше видна
            fixedY = 20 + Math.random() * 100;
            duck.classList.add('flip');
            break;
    }
    
    duckContainer.style.left = startX + 'px';
    duckContainer.style.bottom = fixedY + 'px';
    
    duckBubble.textContent = getRandomPhrase();
    
    // Peek in (медленно выглядывает)
    const peekInDuration = 600;
    const startPeekIn = Date.now();
    
    function animatePeekIn() {
        const elapsed = Date.now() - startPeekIn;
        const progress = Math.min(elapsed / peekInDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const currentX = startX + (endX - startX) * eased;
        
        duckContainer.style.left = currentX + 'px';
        
        if (progress < 1) {
            requestAnimationFrame(animatePeekIn);
        } else {
            // Show bubble after peeking in
            setTimeout(() => {
                duckBubble.classList.add('show');
            }, 200);
            
            // Stay for 5 seconds with phrase
            setTimeout(() => {
                duckBubble.classList.remove('show');
                
                // Peek out (прячется обратно)
                setTimeout(() => {
                    const startPeekOut = Date.now();
                    
                    function animatePeekOut() {
                        const elapsed = Date.now() - startPeekOut;
                        const progress = Math.min(elapsed / peekInDuration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        
                        const currentX = endX + (startX - endX) * eased;
                        
                        duckContainer.style.left = currentX + 'px';
                        
                        if (progress < 1) {
                            requestAnimationFrame(animatePeekOut);
                        } else {
                            duckActive = false;
                            scheduleDuckAction();
                        }
                    }
                    
                    animatePeekOut();
                }, 300);
            }, 5000);
        }
    }
    
    animatePeekIn();
}

// Center hover - зависает в центре экрана
function startDuckHover() {
    if (duckActive) return;
    duckActive = true;

    const centerX = window.innerWidth / 2 - 60;
    const centerY = window.innerHeight / 2 - 60;
    
    const startX = Math.random() > 0.5 ? -150 : window.innerWidth + 150;
    
    duckContainer.style.left = startX + 'px';
    duckContainer.style.bottom = centerY + 'px';
    
    if (startX < 0) {
        duck.classList.remove('flip');
    } else {
        duck.classList.add('flip');
    }
    
    duck.classList.add('walking');
    
    // Fly to center
    const flyDuration = 1500;
    const startFly = Date.now();
    
    function animateFly() {
        const elapsed = Date.now() - startFly;
        const progress = Math.min(elapsed / flyDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const currentX = startX + (centerX - startX) * eased;
        duckContainer.style.left = currentX + 'px';
        
        if (progress < 1) {
            requestAnimationFrame(animateFly);
        } else {
            duck.classList.remove('walking');
            duckBubble.textContent = getRandomPhrase();
            duckBubble.classList.add('show');
            
            // Stay in center for 4 seconds
            setTimeout(() => {
                duckBubble.classList.remove('show');
                duck.classList.add('walking');
                
                // Fly away
                setTimeout(() => {
                    const exitX = Math.random() > 0.5 ? window.innerWidth + 150 : -150;
                    const startExit = Date.now();
                    
                    if (exitX > centerX) {
                        duck.classList.remove('flip');
                    } else {
                        duck.classList.add('flip');
                    }
                    
                    function animateExit() {
                        const elapsed = Date.now() - startExit;
                        const progress = Math.min(elapsed / flyDuration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        
                        const currentX = centerX + (exitX - centerX) * eased;
                        duckContainer.style.left = currentX + 'px';
                        
                        if (progress < 1) {
                            requestAnimationFrame(animateExit);
                        } else {
                            duck.classList.remove('walking');
                            duckActive = false;
                            scheduleDuckAction();
                        }
                    }
                    
                    animateExit();
                }, 300);
            }, 4000);
        }
    }
    
    animateFly();
}

function scheduleDuckAction() {
    const delay = 4000 + Math.random() * 6000; // 4-10 seconds
    setTimeout(() => {
        const action = Math.random();
        
        if (action < 0.5) {
            startDuckWalk(); // 50% - обычная ходьба
        } else if (action < 0.8) {
            startDuckPeek(); // 30% - выглядывание
        } else {
            startDuckHover(); // 20% - зависание в центре
        }
    }, delay);
}

// Change phrase on hover even when not walking
duck.addEventListener('mouseenter', () => {
    duckBubble.textContent = getRandomPhrase();
    duckBubble.classList.add('show');
});

duck.addEventListener('mouseleave', () => {
    if (!duckWalking) {
        duckBubble.classList.remove('show');
    }
});

// Click animation - link will work naturally to open Telegram
duck.addEventListener('click', (e) => {
    duck.style.transform = 'scale(0.95)';
    setTimeout(() => {
        duck.style.transform = '';
    }, 150);
});

// Start duck after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const action = Math.random();
        if (action < 0.5) {
            startDuckWalk();
        } else if (action < 0.8) {
            startDuckPeek();
        } else {
            startDuckHover();
        }
    }, 2000);
});

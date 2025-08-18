// Load and initialize header dynamically
fetch('header.html')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
  })
  .then(html => {
    const headerContainer = document.getElementById('common-header');
    if (!headerContainer) return;
    
    headerContainer.innerHTML = html;
    initializeHeaderComponents();
    setupScrollBehavior();
  })
  .catch(err => console.error('Error loading header:', err));

function initializeHeaderComponents() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Close menu when clicking on nav links (optional)
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function setupScrollBehavior() {
  const header = document.getElementById('page-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  const scrollThreshold = 50;
  let ticking = false;

  // Initial setup
  updateHeaderStyles(lastScrollY, header);

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeaderStyles(currentScrollY, header);
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
        ticking = false;
      });
      ticking = true;
    }

    // Close mobile menu if open during scroll
    const navLinks = document.getElementById('nav-links');
    if (navLinks?.classList.contains('active')) {
      navLinks.classList.remove('active');
      document.getElementById('menu-toggle')?.setAttribute('aria-expanded', 'false');
    }
  });

  function updateHeaderStyles(currentScrollY, headerElement) {
    if (currentScrollY > scrollThreshold) {
      headerElement.classList.toggle('hidden', currentScrollY > lastScrollY);
    } else {
      headerElement.classList.remove('hidden');
    }
    
    headerElement.style.boxShadow = currentScrollY > 10 
      ? '0 2px 10px rgba(0,0,0,0.1)' 
      : 'none';
  }
}

/*----------------- Footer Animation & Dynamic Loading ------------*/

// Load footer dynamically and initialize animations
fetch('footer.html')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.text();
  })
  .then(html => {
    const footerContainer = document.getElementById('common-footer');
    if (!footerContainer) {
      console.warn('Footer container not found');
      return;
    }
    
    footerContainer.innerHTML = html;
    initializeFooterAnimations();
    console.log('Footer loaded and initialized successfully');
  })
  .catch(err => console.error('Error loading footer:', err));

function initializeFooterAnimations() {
  const marqueeBanner = document.querySelector('.unik-marquee-banner');
  const marqueeWrapper = document.querySelector('.unik-marquee-wrapper');

  if (!marqueeBanner || !marqueeWrapper) {
    console.warn('Marquee elements not found in footer');
    return;
  }

  // Add click event with better state management
  marqueeBanner.addEventListener('click', toggleMarqueeAnimation);
  
  // Add keyboard accessibility
  marqueeBanner.setAttribute('tabindex', '0');
  marqueeBanner.setAttribute('role', 'button');
  marqueeBanner.setAttribute('aria-label', 'Toggle marquee animation');
  marqueeBanner.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMarqueeAnimation();
    }
  });

  
  marqueeBanner.addEventListener('mouseleave', () => {
    marqueeBanner.style.opacity = '1';
  });

  function toggleMarqueeAnimation() {
    const isPaused = marqueeWrapper.style.animationPlayState === 'paused';
    marqueeWrapper.style.animationPlayState = isPaused ? 'running' : 'paused';
    
    // Update ARIA label for screen readers
    marqueeBanner.setAttribute('aria-label', 
      isPaused ? 'Marquee animation playing' : 'Marquee animation paused');
    
    // Visual feedback
    marqueeBanner.classList.toggle('paused', !isPaused);
    console.log(`Marquee animation ${isPaused ? 'resumed' : 'paused'}`);
  }
}
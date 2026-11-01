// Load Navbar
fetch("/assets/components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // ✅ Hamburger toggle (AFTER loading navbar)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }
  });

// Load Footer
fetch("/assets/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // ✅ Auto year update
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });


// ✅ Optional: Navbar hide on scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

// Navbar And Fotter Ends

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.bg-slide');
    const content = document.getElementById('hero-content');
    let index = 0;

    function runHeroSlider() {
        // Switch Slides
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');

        // Re-trigger content entrance
        content.style.opacity = "0";
        content.style.transform = "translateY(30px)";
        
        setTimeout(() => {
            content.style.transition = "all 1s ease";
            content.style.opacity = "1";
            content.style.transform = "translateY(0)";
        }, 100);

        index = (index + 1) % slides.length;
    }

    runHeroSlider();
    setInterval(runHeroSlider, 5000);
});


// ✅ Scroll Reveal Logic
document.addEventListener("DOMContentLoaded", () => {
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the reveal class
                entry.target.classList.add('reveal');
                // Once revealed, stop observing to save performance
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    // Target all elements with the animate-trigger class
    const targets = document.querySelectorAll('.animate-trigger, .reveal-left');
    targets.forEach(target => observer.observe(target));
});



















document.addEventListener("DOMContentLoaded", () => {
    
    // Target element arrays
    const textCard = document.querySelector(".reveal-left");
    const imageWrappers = document.querySelectorAll(".image-reveal-wrapper");

    // 1. Trigger Initial Hero Text Fade-In Panel on page load
    if (textCard) {
        setTimeout(() => {
            textCard.classList.add("active-now");
        }, 150);
    }

    // 2. Execute Image Slide Cover Masks & Underlay Smooth Zoom
    imageWrappers.forEach((wrapper) => {
        setTimeout(() => {
            wrapper.classList.add("active-now");
            
            const targetedImage = wrapper.querySelector(".about-img");
            if (targetedImage) {
                setTimeout(() => {
                    targetedImage.classList.add("reveal-active-zoom");
                }, 100);
            }
        }, 350);
    });

    // 3. High Performance Scroll-Reveal Intersection Observer
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target); // Unobserve to boost layout rendering performance
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    scrollRevealElements.forEach(element => {
        scrollObserver.observe(element);
    });

});









document.addEventListener('DOMContentLoaded', () => {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            const hiddenItems = document.querySelectorAll('.processing-grid .hidden-item');
            
            // --- LOAD MORE MANAGEMENT ---
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', () => {
                    hiddenItems.forEach(item => {
                        item.classList.remove('hidden-item');
                    });
                    loadMoreBtn.parentElement.style.display = 'none'; // Unmount trigger once loaded
                    
                    updateLightboxRegistry(); // Sync newly unhidden elements to the carousel map
                });
            }

            // --- FULLSCREEN LIGHTBOX NAVIGATION ENGINE ---
            let visibleMediaCards = [];
            const lightbox = document.getElementById('lightbox');
            const lightboxContent = document.querySelector('.lightbox-content');
            const closeBtn = document.getElementById('closeLightbox');
            const nextBtn = document.getElementById('nextLightbox');
            let currentIndex = 0;

            function updateLightboxRegistry() {
                // Dynamically registers active elements available on layout viewport screen
                visibleMediaCards = Array.from(document.querySelectorAll('.process-item'))
                    .filter(el => getComputedStyle(el).display !== 'none');

                visibleMediaCards.forEach((card, assignedIndex) => {
                    card.onclick = () => launchFullscreen(assignedIndex);
                });
            }

            const launchFullscreen = (targetIndex) => {
                currentIndex = targetIndex;
                const activeCard = visibleMediaCards[currentIndex];
                const mediaType = activeCard.getAttribute('data-type');
                const sourceUrl = activeCard.getAttribute('data-src');

                lightboxContent.innerHTML = ''; // Fresh viewport canvas flush

                if (mediaType === 'image') {
                    const img = document.createElement('img');
                    img.src = sourceUrl;
                    lightboxContent.appendChild(img);
                } else if (mediaType === 'video') {
                    const video = document.createElement('video');
                    video.src = sourceUrl;
                    video.controls = true;
                    video.autoplay = true;
                    lightboxContent.appendChild(video);
                }

                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Halt backframe layout scrolling
            };

            const shutdownFullscreen = () => {
                lightbox.style.display = 'none';
                lightboxContent.innerHTML = ''; // Terminate dynamic audio playback streams instantly
                document.body.style.overflow = 'auto';
            };

            const advanceNextItem = () => {
                currentIndex = (currentIndex + 1) % visibleMediaCards.length;
                launchFullscreen(currentIndex);
            };

            // Event Bindings
            if (closeBtn) closeBtn.onclick = shutdownFullscreen;
            if (nextBtn) nextBtn.onclick = advanceNextItem;

            if (lightbox) {
                lightbox.onclick = (e) => {
                    if (e.target === lightbox) shutdownFullscreen();
                };
            }

            // Keyboard UI Support mappings
            document.onkeydown = (e) => {
                if (lightbox && lightbox.style.display === 'flex') {
                    if (e.key === 'Escape') shutdownFullscreen();
                    if (e.key === 'ArrowRight' || e.key === ' ') advanceNextItem();
                }
            };

            // Initialize on start sequence run
            updateLightboxRegistry();
        });





// --- SCROLL REVEAL ENGINE ---
const revealElements = document.querySelectorAll('.reveal-element');

const revealOptions = {
    root: null,         // Uses the browser viewport window as the container bounding box
    threshold: 0.15,    // Triggers when 15% of the element is visible on screen
    rootMargin: "0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add active class to fire the CSS slide up animation
            entry.target.classList.add('active');
            // Unobserve the element so the animation only plays once safely
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Attach the observer to all designated items
revealElements.forEach(element => {
    revealObserver.observe(element);
});
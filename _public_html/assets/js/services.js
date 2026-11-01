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
    
    // Select all dashboard presentation items tracking data keys
    const itemsToReveal = document.querySelectorAll(".reveal-element");

    // Sequence loading cascades uniformly across engine passes
    itemsToReveal.forEach((element) => {
        // Set small baseline buffer delay window
        setTimeout(() => {
            element.classList.add("active-view");
        }, 100);
    });

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
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeBtn = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevLightbox');
    const nextBtn = document.getElementById('nextLightbox');
    
    let currentIndex = 0;

    // Open Lightbox
    const openLightbox = (index) => {
        currentIndex = index;
        const item = galleryItems[currentIndex];
        const type = item.getAttribute('data-type');
        const src = item.getAttribute('data-src');

        // Clear previous content
        lightboxContent.innerHTML = '';

        if (type === 'image') {
            const img = document.createElement('img');
            img.src = src;
            img.alt = item.querySelector('img').alt;
            lightboxContent.appendChild(img);
        } else if (type === 'video') {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            lightboxContent.appendChild(video);
        }

        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxContent.innerHTML = ''; // Stops video audio instantly on close
        document.body.style.overflow = 'auto';
    };

    // Next / Prev Actions
    const showNext = () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentIndex);
    };

    // Event Listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Close by clicking outside content area
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Accessibility
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
});
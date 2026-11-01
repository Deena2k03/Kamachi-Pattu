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




function showLocation(city, buttonElement) {
            // Mapping city keys to your official Google Map source paths
            const locations = {
                chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.1105300141639!3d13.047525313264426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x7e61415492b2d11e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
                
                coimbatore: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44149091931!2d76.88483286708761!3d10.998422329380185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af6d96ec7f%3A0x26cdb122703ed982!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000002!5m2!1sen!2sin",
                
                salem: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125016.27301019183!2d78.07913348637783!3d11.664057864197576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf5ecba0b%3A0xee990909a0a8caf4!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
                
                madurai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1973839540888!2d78.11446967507696!3d9.917512790183768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c53e5809f8b1%3A0x7bc4af5e17a7f97e!2sSri%20Kanchipuram%20Pattu%20Center%20Madurai!5e0!3m2!1sen!2sin!4v1780216079939!5m2!1sen!2sin",
                
                trichy: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31350.763563922188!2d78.66445929796393!3d10.823137251021882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5f8262a62a9%3A0xc92d6a82eca6138a!2sSree%20Kanchipuram%20Silk%20Center!5e0!3m2!1sen!2sin!4v1780216045466!5m2!1sen!2sin",
                
                erode: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003349.178781125!2d76.90421545778307!3d10.78580812558779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fb6e0a73479%3A0xbe24b0b81ef61909!2sSri%20Kanchipuram%20Pattu%20Center!5e0!3m2!1sen!2sin!4v1780215746189!5m2!1sen!2sin"
            };

            // 1. Swap the iframe embed source link dynamically
            if (locations[city]) {
                document.getElementById("mapFrame").src = locations[city];
            }

            // 2. Clear the active highlighting class from all other buttons
            const buttons = document.querySelectorAll('.locations-container button');
            buttons.forEach(btn => btn.classList.remove('active'));

            // 3. Apply active styling highlights specifically to the clicked button element
            if (buttonElement) {
                buttonElement.classList.add('active');
            }
        }
// Navbar And Fotter Ends



// Hero Section Starts

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Background Image Slider Rotation Logic
    const slides = document.querySelectorAll(".bg-slide");
    let currentSlideIndex = 0;
    const slideIntervalTime = 6000; // Change background image every 6 seconds

    function nextBackgroundSlide() {
        // Remove active class from current slide
        slides[currentSlideIndex].classList.remove("active");
        
        // Advance to next index
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlideIndex].classList.add("active");
    }

    // Initialize background slide cycling if multiple exist
    if (slides.length > 1) {
        setInterval(nextBackgroundSlide, slideIntervalTime);
    }


    // 2. Smooth Sequential Staggered Loading Animations (Reveal Elements)
    const elementsToReveal = document.querySelectorAll(".reveal");
    
    elementsToReveal.forEach((element, index) => {
        // Stagger the introduction of elements down the page visually
        setTimeout(() => {
            element.classList.add("visible");
        }, 150 * (index + 1)); 
    });

});



// Section 1 Starts

// Append this functionality inside your DOMContentLoaded event block
document.addEventListener("DOMContentLoaded", () => {
    
    // Previous hero code stays here...

    // 3. High Performance Intersection Observer for Scroll Reveal Animations
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScrollOptions = {
        root: null,         // Use viewport as boundary root
        threshold: 0.15,    // Trigger when 15% of element is visible
        rootMargin: "0px"   // No extra expansion padding
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active reveal visibility CSS class
                entry.target.classList.add("reveal-active");
                // Stop observing once triggered to optimize execution tree
                observer.unobserve(entry.target);
            }
        });
    }, revealOnScrollOptions);

    // Register elements to observer array loop
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

});






// Section 6 Starts



document.addEventListener("DOMContentLoaded", () => {
    
    // Testimonial Carousel Controller Initialization
    const track = document.querySelector(".testimonial-track");
    const slides = Array.from(document.querySelectorAll(".testimonial-slide"));
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const dotsContainer = document.querySelector(".pagination-dots");
    
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();

    function getCardsPerView() {
        if (window.innerWidth <= 650) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    // Generate responsive dots navigation references dynamically
    function setupPagination() {
        dotsContainer.innerHTML = "";
        const maxSteps = slides.length - cardsPerView + 1;
        for (let i = 0; i < maxSteps; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === currentIndex) dot.classList.add("active");
            dot.addEventListener("click", () => moveToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update active dots
        const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function moveToSlide(index) {
        const maxIndex = slides.length - cardsPerView;
        if (index < 0) {
            currentIndex = 0;
        } else if (index > maxIndex) {
            currentIndex = maxIndex;
        } else {
            currentIndex = index;
        }
        updateSlider();
    }

    nextBtn.addEventListener("click", () => {
        const maxIndex = slides.length - cardsPerView;
        if (currentIndex < maxIndex) {
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0); // Cycle back to start safely
        }
    });

    prevBtn.addEventListener("click", () => {
        const maxIndex = slides.length - cardsPerView;
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(maxIndex); // Cycle to the absolute end safely
        }
    });

    // Handle viewport changes dynamically on orientation/resize shifts
    window.addEventListener("resize", () => {
        const currentCheck = getCardsPerView();
        if (currentCheck !== cardsPerView) {
            cardsPerView = currentCheck;
            currentIndex = 0;
            setupPagination();
            updateSlider();
        }
    });

    // Execute setups
    setupPagination();
    // Tiny processing execution wait step to confirm DOM dimension alignment calculation passes
    setTimeout(updateSlider, 100);

});


// Section 6 Ends


// Section 7 Starts
document.addEventListener("DOMContentLoaded", () => {
    
    // FAQ Accordion Toggle Interaction Core
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const currentItem = this.parentElement;
            const currentAnswer = this.nextElementSibling;

            // Check if item is already active to safely close it down
            if (currentItem.classList.contains("active")) {
                currentItem.classList.remove("active");
                currentAnswer.style.maxHeight = null;
            } else {
                // Optional: Close any other open FAQ tabs automatically
                document.querySelectorAll(".faq-item").forEach(item => {
                    item.classList.remove("active");
                    item.querySelector(".faq-answer").style.maxHeight = null;
                });

                // Toggle visibility onto the targeted container element
                currentItem.classList.add("active");
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
            }
        });
    });

});
// Section 7 Ends
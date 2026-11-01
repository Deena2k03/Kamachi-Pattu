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


//Hero section starts



document.addEventListener("DOMContentLoaded", () => {
    
    const infoConsole = document.querySelector(".reveal-card");
    const stackCards = document.querySelectorAll(".reveal-item");

    // 1. Unveil the Left Floating Glass Box Console
    if (infoConsole) {
        setTimeout(() => {
            infoConsole.classList.add("active-state");
        }, 150);
    }

    // 2. Cascade Right 3D Deck Stack Blocks Step-by-Step sequentially 
    stackCards.forEach((card) => {
        // Read unique inline tracking metric indexes bound directly inside HTML tags
        const cardIndex = parseInt(card.getAttribute("style").match(/\d+/)[0], 10);
        
        setTimeout(() => {
            card.classList.add("active-state");
        }, 200 + (cardIndex * 150)); // Seamless 150ms trailing waterfall stagger timing
    });

});



document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial Page-Load Cascade for Hero Stack Cards
    const infoConsole = document.querySelector(".reveal-card");
    const stackCards = document.querySelectorAll(".reveal-item");

    if (infoConsole) {
        setTimeout(() => infoConsole.classList.add("active-state"), 150);
    }

    stackCards.forEach((card) => {
        const cardStyle = card.getAttribute("style");
        const cardIndex = cardStyle ? parseInt(cardStyle.match(/\d+/)[0], 10) : 1;
        
        setTimeout(() => {
            card.classList.add("active-state");
        }, 200 + (cardIndex * 150));
    });


    // 2. High-Performance Intersection Observer for Scroll Revealing Sections
    const scrollRevealItems = document.querySelectorAll(".scroll-reveal");

    const scrollObserverOptions = {
        threshold: 0.12, // Fires instantly when 12% of the card bounds cross into the layout viewport
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target); // Stop tracking card calculations once transition completes successfully
            }
        });
    }, scrollObserverOptions);

    // Bind monitoring engine onto get-in-touch scroll cards
    scrollRevealItems.forEach(item => {
        scrollObserver.observe(item);
    });

});



// Contact Form Starts

document.addEventListener("DOMContentLoaded", () => {

    // --- INTEGRATED SCROLL REVEAL INTERSECTION CODES ---
    const formRevealItem = document.querySelector(".form-console-card");
    if (formRevealItem) {
        const formObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        formObserver.observe(formRevealItem);
    }

});

// Cotact Form Ends



(function () {

    emailjs.init("XHxBsGqPzsxo5Ona3");

})();

const form = document.querySelector(".valuation-core-form");

const submitBtn = document.querySelector(".form-submit-btn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const originalBtn = submitBtn.innerHTML;

    // Loading State
    submitBtn.innerHTML = `
        <span class="btn-loader"></span>
        Sending Request...
    `;

    submitBtn.disabled = true;

    const templateParams = {

        full_name: document.getElementById("fullName").value,

        mobile_number: document.getElementById("mobileNumber").value,

        city_name: document.getElementById("cityName").value,

        service_type: document.getElementById("serviceType").value,

        user_message: document.getElementById("userMessage").value

    };

    emailjs.send(
        "service_pe01gsx",
        "template_y04hxgf",
        templateParams
    )

    .then(function () {

        // Success Message Inside Form
        const successBox = document.createElement("div");

        successBox.className = "form-success-message";

        successBox.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Your valuation request has been sent successfully.
        `;

        form.appendChild(successBox);

        form.reset();

        submitBtn.innerHTML = `
            <i class="fas fa-check"></i>
            Request Sent
        `;

        setTimeout(() => {

            successBox.remove();

            submitBtn.innerHTML = originalBtn;

            submitBtn.disabled = false;

        }, 4000);

    })

    .catch(function (error) {

        console.log(error);

        submitBtn.innerHTML = `
            <i class="fas fa-times-circle"></i>
            Failed To Send
        `;

        setTimeout(() => {

            submitBtn.innerHTML = originalBtn;

            submitBtn.disabled = false;

        }, 3000);

    });

});

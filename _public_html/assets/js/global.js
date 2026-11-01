function showLocation(city, buttonElement) {
    const locations = {
                chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.1105300141639!3d13.047525313264426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x7e61415492b2d11e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin",
                
                coimbatore: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44149091931!2d76.88483286708761!3d10.998422329380185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af6d96ec7f%3A0x26cdb122703ed982!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000002!5m2!1sen!2sin",
                
                salem: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125016.27301019183!2d78.07913348637783!3d11.664057864197576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf5ecba0b%3A0xee990909a0a8caf4!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
                
                madurai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1973839540888!2d78.11446967507696!3d9.917512790183768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c53e5809f8b1%3A0x7bc4af5e17a7f97e!2sSri%20Kanchipuram%20Pattu%20Center%20Madurai!5e0!3m2!1sen!2sin!4v1780216079939!5m2!1sen!2sin",
                
                trichy: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31350.763563922188!2d78.66445929796393!3d10.823137251021882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5f8262a62a9%3A0xc92d6a82eca6138a!2sSree%20Kanchipuram%20Silk%20Center!5e0!3m2!1sen!2sin!4v1780216045466!5m2!1sen!2sin",
                
                erode: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003349.178781125!2d76.90421545778307!3d10.78580812558779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fb6e0a73479%3A0xbe24b0b81ef61909!2sSri%20Kanchipuram%20Pattu%20Center!5e0!3m2!1sen!2sin!4v1780215746189!5m2!1sen!2sin"
            };

    const mapFrame = document.getElementById("mapFrame");
    
    // 1. Update the iframe location src if it exists on the page
    if (mapFrame && locations[city]) {
        mapFrame.src = locations[city];
    }

    // 2. Clear the 'active' class from all buttons in the container
    const buttons = document.querySelectorAll('.locations-container button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Highlight the clicked button
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}

// Optional: Dynamically set the copyright year in your footer automatically!
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
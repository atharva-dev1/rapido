// Function to display a booking alert
function bookRide() {
    alert("Your ride has been booked successfully!");
}

// Add event listener to all 'Book a Ride' buttons
document.addEventListener("DOMContentLoaded", function () {
    let bookButtons = document.querySelectorAll(".btn");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", bookRide);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});

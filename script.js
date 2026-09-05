// =====================================
// DANNY PORTFOLIO
// JAVASCRIPT
// =====================================

console.log("Danny Portfolio is running!");


// =====================================
// MOBILE NAVIGATION
// =====================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation link clicked:", link.textContent);

    });

});


// =====================================
// CURRENT YEAR
// =====================================

const currentYear = new Date().getFullYear();

console.log("Current year:", currentYear);
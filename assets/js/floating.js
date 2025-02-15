document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href"); // Get the section ID
            const targetElement = document.querySelector(targetId); // Find the section

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjusts scroll position slightly
                    behavior: "smooth" // Enables smooth scrolling
                });
            }
        });
    });
});

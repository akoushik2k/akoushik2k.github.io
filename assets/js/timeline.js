document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".experience-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    items.forEach(item => {
        observer.observe(item);
    });
});

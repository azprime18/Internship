// Week 3 - Interactive Features

document.addEventListener("DOMContentLoaded", () => {

    // Discover buttons
    const discoverButtons = document.querySelectorAll(".card-content a");

    discoverButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const card = button.closest(".destination-card");
            const destination = card.querySelector("h3").textContent;

            alert(`You selected ${destination}!`);
        });
    });

    // Explore buttons
    const exploreButtons = document.querySelectorAll(
        ".primary-btn, .nav-btn"
    );

    exploreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.style.transform = "scale(0.96)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);
        });
    });

    // Destination card hover effect
    const cards = document.querySelectorAll(".destination-card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    // Scroll to top button
    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.className = "scroll-top";
    topButton.title = "Back to top";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Active navigation link
    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

});
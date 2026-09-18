document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. DESTINATION BUTTONS
    ========================================== */

    const discoverButtons = document.querySelectorAll(".card-content a");

    discoverButtons.forEach((button) => {

        button.addEventListener("click", () => {
            console.log("Destination selected:", button.getAttribute("aria-label"));
        });

    });


    /* ==========================================
       2. NAVIGATION ACTIVE STATE
    ========================================== */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((navLink) => {
                navLink.removeAttribute("aria-current");
            });

            link.setAttribute("aria-current", "page");

        });

    });


    /* ==========================================
       3. SCROLL TO TOP BUTTON
    ========================================== */

    const scrollTopButton = document.createElement("button");

    scrollTopButton.type = "button";
    scrollTopButton.className = "scroll-top";
    scrollTopButton.setAttribute("aria-label", "Scroll back to top");
    scrollTopButton.setAttribute("title", "Scroll to top");
    scrollTopButton.innerHTML = "↑";

    document.body.appendChild(scrollTopButton);


    /* Show button after scrolling */
    const handleScroll = () => {

        if (window.scrollY > 500) {
            scrollTopButton.classList.add("show");
        } else {
            scrollTopButton.classList.remove("show");
        }

    };

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });


    /* Scroll to top */
    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==========================================
       4. DESTINATION CARD ACCESSIBILITY
    ========================================== */

    const cards = document.querySelectorAll(".destination-card");

    cards.forEach((card) => {

        const link = card.querySelector("a");

        if (!link) {
            return;
        }

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                link.click();
            }

        });

    });


    /* ==========================================
       5. REDUCED MOTION SUPPORT
    ========================================== */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
        document.documentElement.style.scrollBehavior = "auto";
    }

});
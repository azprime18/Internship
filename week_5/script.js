const app = document.querySelector("#app");

const routes = {
    "/": {
        title: "Home",
        content: `
            <section class="hero">
                <div class="hero-content">
                    <p class="hero-tag">EXPLORE THE EXTRAORDINARY</p>

                    <h1>
                        Discover places
                        <span>worth remembering.</span>
                    </h1>

                    <p class="hero-description">
                        Explore breathtaking destinations,
                        discover unique experiences,
                        and create memories that last a lifetime.
                    </p>

                    <div class="hero-buttons">
                        <a href="/explore" data-route="/explore" class="btn primary-btn">
                            Explore Destinations
                        </a>

                        <a href="/about" data-route="/about" class="btn secondary-btn">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        `
    },

    "/explore": {
        title: "Explore",
        content: `
            <section class="page-section">
                <p class="hero-tag">EXPLORE</p>

                <h1>Find your next <span>adventure.</span></h1>

                <p class="page-description">
                    Discover beautiful destinations and unforgettable
                    experiences around the world.
                </p>

                <div class="destination-grid">
                    <div class="destination-card">
                        <h2>Mountains</h2>
                        <p>Peaceful landscapes and breathtaking views.</p>
                    </div>

                    <div class="destination-card">
                        <h2>Beaches</h2>
                        <p>Relax beside crystal-clear waters and golden sands.</p>
                    </div>

                    <div class="destination-card">
                        <h2>City Life</h2>
                        <p>Experience culture, food and unforgettable moments.</p>
                    </div>
                </div>
            </section>
        `
    },

    "/about": {
        title: "About",
        content: `
            <section class="page-section">
                <p class="hero-tag">ABOUT EXPLOREMORE</p>

                <h1>Travel beyond the <span>ordinary.</span></h1>

                <p class="page-description">
                    ExploreMore is a simple travel platform designed to
                    help users discover destinations and experiences
                    through a smooth and interactive interface.
                </p>
            </section>
        `
    },

    "/contact": {
        title: "Contact",
        content: `
            <section class="page-section">
                <p class="hero-tag">GET IN TOUCH</p>

                <h1>Let's start a <span>conversation.</span></h1>

                <p class="page-description">
                    Have a question or suggestion? We'd love to hear from you.
                </p>

                <div class="contact-card">
                    <p>Email: hello@exploremore.com</p>
                    <p>We usually respond within 24 hours.</p>
                </div>
            </section>
        `
    }
};


// Render current route
function renderRoute() {

    const path = window.location.pathname;

    const route = routes[path];

    if (route) {
    app.classList.remove("page-enter");

    setTimeout(() => {
        app.innerHTML = route.content;
        app.classList.add("page-enter");

        document.title = `ExploreMore | ${route.title}`;

        updateActiveLink(path);
    }, 50);
}
}

function updateActiveLink(path) {

    const links = document.querySelectorAll("[data-route]");

    links.forEach(link => {

        const route = link.getAttribute("data-route");

        link.classList.remove("active");

        if (route === path) {
            link.classList.add("active");
        }

    });
}


// Navigate without page reload
function navigateTo(path) {

    history.pushState({}, "", path);

    renderRoute();
}


// Handle navigation clicks
document.addEventListener("click", function (event) {

    const link = event.target.closest("[data-route]");

    if (!link) return;

    event.preventDefault();

    const path = link.getAttribute("data-route");

    navigateTo(path);
});


// Browser Back / Forward
window.addEventListener("popstate", function () {

    renderRoute();

});


// 404 Page
function loadNotFound() {

    app.innerHTML = `
        <section class="page-section">
            <p class="hero-tag">404 ERROR</p>

            <h1>Page <span>not found.</span></h1>

            <p class="page-description">
                The page you are looking for does not exist.
            </p>

            <a href="/" data-route="/" class="btn primary-btn">
                Back to Home
            </a>
        </section>
    `;

    document.title = "ExploreMore | 404";
}


// Initial page load
renderRoute();
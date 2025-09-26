// Mobile nav toggle
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            menu.classList.toggle('open');
        });
    }
})();

// Smooth scroll for same-page anchors
(function () {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (!id || id === '#') return;
            var target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', id);
            }
        });
    }
})();

// Year in footer
(function () {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
})();


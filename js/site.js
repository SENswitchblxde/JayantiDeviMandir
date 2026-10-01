(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Quiet reveals: images fade in once; the Jaintapuri → Jind line plays once.
  var targets = document.querySelectorAll('.reveal, .morph');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
  targets.forEach(function (el) { io.observe(el); });

  // Stagger the fading letters of "Jaintapuri"
  document.querySelectorAll('.morph .from .drop').forEach(function (s, i) {
    s.style.transitionDelay = (0.35 + i * 0.14) + 's';
  });
})();

/* pages.js — iGroup inner pages GSAP animations */

(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Fade-up on scroll (generic) ──
  gsap.utils.toArray('.fade-up').forEach(function (el) {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.75, ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      }
    );
  });

  // ── Staggered children fade-up ──
  gsap.utils.toArray('.stagger-up').forEach(function (container) {
    var children = container.children;
    gsap.fromTo(children,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.6, ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true
        }
      }
    );
  });

  // ── Navbar: transparent → solid on scroll ──
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var navInner = navbar.querySelector('.navbar-inner');
    if (navInner) {
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: function (self) {
          if (self.progress > 0) {
            navInner.style.background = 'rgba(26,26,46,0.97)';
            navInner.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
          } else {
            navInner.style.background = '';
            navInner.style.boxShadow = '';
          }
        }
      });
    }
  }

  // ── Counter animation ──
  gsap.utils.toArray('.pg-counter').forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals')) || 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.fromTo({ val: 0 },
          { val: target },
          {
            duration: 1.8, ease: 'power2.out',
            onUpdate: function () {
              el.textContent = prefix + this.targets()[0].val.toFixed(decimals) + suffix;
            }
          }
        );
      }
    });
  });

  // ── Timeline line draw ──
  gsap.utils.toArray('.pg-timeline-item').forEach(function (item, i) {
    gsap.fromTo(item,
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0,
        duration: 0.6, ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          once: true
        }
      }
    );
  });

  // ── Lifecycle steps ──
  gsap.utils.toArray('.pg-lifecycle-step').forEach(function (step, i) {
    gsap.fromTo(step,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.55, ease: 'power2.out',
        delay: i * 0.12,
        scrollTrigger: {
          trigger: step,
          start: 'top 88%',
          once: true
        }
      }
    );
  });

  // ── Process steps ──
  gsap.utils.toArray('.pg-step').forEach(function (step, i) {
    gsap.fromTo(step,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.55, ease: 'power2.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.pg-steps',
          start: 'top 85%',
          once: true
        }
      }
    );
  });

  // ── Card hover lift (ensure CSS handles most of it) ──
  // CSS already handles hover. This adds initial entrance.
  gsap.utils.toArray('.pg-card').forEach(function (card, i) {
    gsap.fromTo(card,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.55, ease: 'power2.out',
        delay: (i % 4) * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true
        }
      }
    );
  });

})();

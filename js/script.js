/* =========================================================================
   KGB Cleaning & Support Services — Concept homepage
   Vanilla JS: navigation, sticky header, FAQ accordion, scroll reveals
   ========================================================================= */
(function () {
  "use strict";

  var doc = document;
  var body = doc.body;

  /* ---------- 1. Mobile navigation ---------- */
  var nav = doc.getElementById("site-nav");
  var navToggle = doc.getElementById("nav-toggle");
  var header = doc.getElementById("site-header");

  function setNav(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (nav) {
    nav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link) setNav(false);
    });
  }

  doc.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setNav(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) setNav(false);
  });

  /* ---------- 2. Sticky header state ---------- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. FAQ accordion ---------- */
  var faqButtons = Array.prototype.slice.call(doc.querySelectorAll(".faq__btn"));

  function closePanel(button) {
    var panel = doc.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", "false");
    if (panel) panel.hidden = true;
  }

  function openPanel(button) {
    var panel = doc.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
  }

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var isOpen = button.getAttribute("aria-expanded") === "true";
      faqButtons.forEach(closePanel);
      if (!isOpen) openPanel(button);
    });
  });

  /* ---------- 4. Scroll reveal ---------- */
  var revealTargets = doc.querySelectorAll(
    ".sec-head, .about__figure, .about__body, .service, .why__item, .sectors__intro, .sectors__list, .process__intro, .process__steps > li, .esg__item, .esg__figure, .faq__aside, .faq__list, .cta__copy, .cta__details, .quote-band blockquote, .quote-band__aside"
  );

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- 5. Section highlight in navigation ---------- */
  var navLinks = Array.prototype.slice.call(doc.querySelectorAll(".nav__list a[href^='#']"));
  var sections = navLinks
    .map(function (link) {
      return doc.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var isCurrent = link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-current", isCurrent);
            if (isCurrent) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ---------- 6. Current year ---------- */
  var year = doc.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

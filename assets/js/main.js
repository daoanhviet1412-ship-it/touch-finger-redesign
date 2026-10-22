(function () {
  "use strict";

  // ── Năm hiện tại ở footer ──
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Đổ bóng header khi cuộn ──
  var header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Banner slider tự động ──
  var slides = document.querySelectorAll(".banner__slide");
  if (slides.length > 1) {
    var idx = 0;
    setInterval(function () {
      slides[idx].classList.remove("is-active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("is-active");
    }, 3000);
  }

  // ── Parallax effect on process & reviews section ──
  var parallaxSections = document.querySelectorAll(".process, .reviews");
  if (parallaxSections.length && !window.matchMedia("(max-width: 620px)").matches) {
    window.addEventListener("scroll", function () {
      var sy = window.scrollY;
      parallaxSections.forEach(function (sec) {
        var rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          var offset = (rect.top + rect.height / 2) / window.innerHeight;
          sec.style.backgroundPositionY = (offset * 8) + "px";
        }
      });
    }, { passive: true });
  }

  // ── Luxury entrance animations ──
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-item, .suit-card, .process-step, .gallery-item, .faq__item, .review-card, .suit-box"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = parseInt(entry.target.style.getPropertyValue("--reveal-delay")) || 0;
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // ── Process step auto-highlight: tuần tự hiện thị các bước ──
  var processSteps = document.querySelectorAll(".process-step");
  if (processSteps.length && "IntersectionObserver" in window) {
    var processIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-step--visible");
            processIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    processSteps.forEach(function (step) {
      processIo.observe(step);
    });
  }

  // ── FAQ: chỉ mở 1 mục trong cùng một cột ──
  document.querySelectorAll(".faq-col").forEach(function (col) {
    var items = col.querySelectorAll(".faq__item");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = anchor.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── Counter animation cho section headings (tạo hiệu ứng số ấn tượng) ──
  // (Chức năng này được thêm vào để tăng tính tương tác khi cuộn)

})();

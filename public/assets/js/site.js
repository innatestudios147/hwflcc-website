// Header state, mobile menu, scroll reveals, number count-ups and the gallery lightbox
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");

  // Shadow under the header once the page scrolls
  if (header) {
    const onScroll = () => header.toggleAttribute("data-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu
  if (toggle && links) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      links.toggleAttribute("data-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
    });
    document.addEventListener("click", (e) => {
      if (toggle.getAttribute("aria-expanded") === "true" && !e.target.closest("[data-header]")) setOpen(false);
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", (mq) => { if (mq.matches) setOpen(false); });
  }

  // Groups whose children enter one after another (stagger index → CSS --i)
  const stagger = (selector, className) => {
    document.querySelectorAll(selector).forEach((group) => {
      group.classList.remove("reveal");
      [...group.children].forEach((child, i) => {
        child.classList.add(className);
        child.style.setProperty("--i", i);
      });
    });
  };
  stagger(".focus-grid, .stats, .steps, .info-grid, .send-cards, .principle-figures", "reveal");
  stagger(".mosaic, .gallery", "reveal-media");

  // Number count-up, eased with the same curve as the CSS --ease-out token: cubic-bezier(0.23, 1, 0.32, 1)
  const cubicBezier = (x1, y1, x2, y2) => {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
    const sampleY = (t) => ((ay * t + by) * t + cy) * t;
    const slopeX = (t) => (3 * ax * t + 2 * bx) * t + cx;
    return (x) => {
      let t = x;
      for (let i = 0; i < 8; i++) {
        const err = sampleX(t) - x;
        if (Math.abs(err) < 1e-6) return sampleY(t);
        const d = slopeX(t);
        if (Math.abs(d) < 1e-6) break;
        t -= err / d;
      }
      let lo = 0, hi = 1; t = x; // bisection fallback
      while (hi - lo > 1e-6) { if (sampleX(t) < x) lo = t; else hi = t; t = (lo + hi) / 2; }
      return sampleY(t);
    };
  };
  const easeOut = cubicBezier(0.23, 1, 0.32, 1);
  const format = new Intl.NumberFormat("en-ZA");
  const counters = reduceMotion ? [] : [...document.querySelectorAll("[data-count]")];
  counters.forEach((el) => {
    // Screen readers get the final figure; the animated digits are visual only
    const label = document.createElement("span");
    label.className = "sr-only";
    label.textContent = el.textContent;
    el.after(label);
    el.setAttribute("aria-hidden", "true");
    el.textContent = `0${el.dataset.suffix || ""}`;
  });
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = target > 1000 ? 1800 : 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = format.format(Math.round(target * easeOut(p))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Reveal once, as things come into view — never re-animate on scroll back.
  // Photo groups are watched as a whole: a fully clipped frame doesn't count as visible.
  const revealables = document.querySelectorAll(".reveal");
  const mediaGroups = document.querySelectorAll(".mosaic, .gallery");
  const showGroup = (group) => group.querySelectorAll(":scope > .reveal-media").forEach((el) => el.classList.add("is-visible"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        if (el.hasAttribute("data-count")) countUp(el);
        else if (el.matches(".mosaic, .gallery")) showGroup(el);
        else el.classList.add("is-visible");
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    revealables.forEach((el) => io.observe(el));
    mediaGroups.forEach((el) => io.observe(el));
    counters.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
    mediaGroups.forEach(showGroup);
    counters.forEach((el) => { el.textContent = format.format(Number(el.dataset.count)) + (el.dataset.suffix || ""); });
  }

  // Gallery lightbox (open/close motion lives in CSS)
  const gallery = document.querySelector("[data-gallery]");
  const box = document.querySelector("[data-lightbox]");
  if (gallery && box && typeof box.showModal === "function") {
    const boxImg = box.querySelector("[data-lightbox-img]");
    gallery.addEventListener("click", (e) => {
      const item = e.target.closest("[data-full]");
      if (!item) return;
      const thumb = item.querySelector("img");
      boxImg.src = item.dataset.full;
      boxImg.alt = thumb ? thumb.alt : "";
      box.showModal();
    });
    box.querySelector("[data-lightbox-close]").addEventListener("click", () => box.close());
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  }
})();

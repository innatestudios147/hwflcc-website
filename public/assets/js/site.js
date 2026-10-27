// Header state, mobile menu, scroll reveal and gallery lightbox
(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");

  // Solid header once the page scrolls
  if (header) {
    const onScroll = () => header.toggleAttribute("data-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu
  if (toggle && links) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      links.toggleAttribute("data-open", open);
      if (open) header?.setAttribute("data-scrolled", "");
      else if (window.scrollY <= 24) header?.removeAttribute("data-scrolled");
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

  // Reveal sections as they scroll into view
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Gallery lightbox
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

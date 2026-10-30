// Shared behaviour for the three HWFLCC homepage versions:
// the "Does your project fit?" checker, scroll entrances, count-ups and Hopefield's local time.
// Every rule in the checker comes from the HWFLCC Application for Funding and strategy pages.
(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LIVE = "https://hwflcc.netlify.app";

  /* ---------- Does your project fit? ---------- */
  const NOT_FUNDED = {
    company: {
      title: "We can't fund private companies.",
      body: "Private companies and close corporations are excluded from HWFLCC funding. A registered non-profit working on the same need can apply.",
    },
    party: {
      title: "We can't fund political parties or trade unions.",
      body: "Political parties and trade unions are excluded from HWFLCC funding.",
    },
    other: {
      title: "We fund four areas.",
      body: "Funding covers education, social welfare, health and development. If your project belongs to one of them, choose it above. We can't fund individual trips to conferences, or activities aimed at one religious group's objectives.",
    },
    elsewhere: {
      title: "Your project needs to serve the Saldanha Bay area.",
      body: "Applicants must provide community upliftment services in the Saldanha Bay Local Municipality.",
    },
    paid: {
      title: "We can't pay back costs already spent.",
      body: "HWFLCC doesn't fund expenses that have already been incurred. Apply before you spend.",
    },
  };

  const DOCS = {
    ngo: ["Your constitution", "Your registration certificate (NPO or PBO)", "A list of your management committee", "A letter requesting funding", "Quotations for what the money will pay for"],
    school: ["A letter requesting funding, approved by your Governing Body", "Your registration documents", "Quotations for what the money will pay for"],
    ecd: ["A letter requesting funding, approved by your Governing Body", "Your registration documents", "Quotations for what the money will pay for"],
    student: ["A quotation from your college or institution for registration fees or textbooks", "A letter requesting funding"],
    individual: ["A letter requesting funding", "Quotations for what the money will pay for"],
  };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };

  document.querySelectorAll("[data-fit]").forEach((form) => {
    const out = form.querySelector("[data-fit-result]");
    const groups = ["who", "area", "where", "paid"];
    const render = () => {
      const data = Object.fromEntries(groups.map((g) => [g, form.querySelector(`input[name="${g}"]:checked`)?.value]));
      const left = groups.filter((g) => !data[g]).length;
      out.replaceChildren();
      out.dataset.state = "waiting";
      let block;
      if (data.who === "company") block = NOT_FUNDED.company;
      else if (data.who === "party") block = NOT_FUNDED.party;
      else if (data.area === "other") block = NOT_FUNDED.other;
      else if (data.where === "elsewhere") block = NOT_FUNDED.elsewhere;
      else if (data.paid === "yes") block = NOT_FUNDED.paid;

      if (block) {
        out.dataset.state = "no";
        out.append(el("p", "fit-title", block.title), el("p", "fit-body", block.body));
        const more = el("a", "fit-link", "Read what we fund");
        more.href = `${LIVE}/our-strategy/`;
        out.append(more);
        return;
      }
      if (left) {
        out.append(
          el("p", "fit-title", left === 4 ? "Answer four quick questions." : `${left} more to go.`),
          el("p", "fit-body", "You'll see whether your project fits our rules and exactly what to send with your application.")
        );
        return;
      }
      out.dataset.state = "yes";
      out.append(
        el("p", "fit-title", "Your project looks like a fit."),
        el("p", "fit-body", "Send the completed application form and a written proposal, with:")
      );
      const list = el("ul", "fit-list");
      DOCS[data.who].forEach((d) => list.append(el("li", null, d)));
      out.append(list);
      const actions = el("p", "fit-actions");
      const pdf = el("a", "fit-link", "Download the application form (PDF)");
      pdf.href = `${LIVE}/downloads/HWFLCC-Application-for-Funding.pdf`;
      actions.append(pdf);
      out.append(actions, el("p", "fit-note", "This is a guide, not a decision. Every application is assessed on its own merits, and the HWFLCC's decision is final."));
    };
    form.addEventListener("change", render);
    form.addEventListener("submit", (e) => e.preventDefault());
    render();
  });

  /* ---------- Entrances: parts of each section rise in once ---------- */
  const risers = [...document.querySelectorAll("[data-rise]")];
  const show = (n) => n.classList.add("is-in");
  if (!reduce && "IntersectionObserver" in window) {
    // Stagger siblings that share a parent
    const groups = new Map();
    risers.forEach((n) => {
      const k = n.closest("[data-rise-group]") || n.parentElement;
      const list = groups.get(k) || [];
      list.push(n);
      groups.set(k, list);
    });
    groups.forEach((list) => list.forEach((n, i) => n.style.setProperty("--i", i)));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    risers.forEach((n) => io.observe(n));
  } else {
    risers.forEach(show);
  }

  /* ---------- Count-ups (visual only; screen readers get the final figure) ---------- */
  const fmt = new Intl.NumberFormat("en-ZA");
  const ease = (t) => 1 - Math.pow(1 - t, 4);
  document.querySelectorAll("[data-count]").forEach((n) => {
    const target = Number(n.dataset.count);
    const plain = n.dataset.plain === "true";
    const write = (v) => { n.textContent = plain ? String(v) : fmt.format(v); };
    if (reduce || !("IntersectionObserver" in window)) return;
    n.setAttribute("aria-label", n.textContent.trim());
    write(0);
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = target > 1000 ? 1600 : 1100;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        write(Math.round(target * ease(p)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(n);
  });

  /* ---------- Hopefield's local time ---------- */
  const clocks = document.querySelectorAll("[data-localtime]");
  if (clocks.length) {
    const f = new Intl.DateTimeFormat("en-ZA", { timeZone: "Africa/Johannesburg", hour: "2-digit", minute: "2-digit" });
    const tick = () => clocks.forEach((c) => { c.textContent = f.format(new Date()); });
    tick();
    setInterval(tick, 15000);
  }
})();

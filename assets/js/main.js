// Booking inbox — change here if you want inquiries to go elsewhere
const BOOKING_EMAIL = "coach@kimberlyandcoach.com";
document.getElementById("yr").textContent = new Date().getFullYear();
const header = document.querySelector(".site-header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 40));
const toggle = document.querySelector(".nav-toggle"), links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => { const o = links.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); });
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".section-head,.card,.tile,.keynote,.inclusions>div,.gallery figure,.split>*").forEach(el => { el.classList.add("reveal"); io.observe(el); });
// Inquiry form -> opens visitor's email client (GitHub Pages has no server).
// To use a form service instead (e.g. Formspree), set the form's action/method and remove this handler.
document.getElementById("inquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const fd = new FormData(e.target); let body = "";
  for (const [k, v] of fd.entries()) body += `${k}: ${v}\n`;
  location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent("Speaking Inquiry – " + (fd.get("Organization") || ""))}&body=${encodeURIComponent(body)}`;
  document.getElementById("formNote").textContent = "Thanks for reaching out to Kimberly & Coach. We look forward to learning more about your event.";
});
document.getElementById("nlForm").addEventListener("submit", e => {
  e.preventDefault();
  const em = document.getElementById("nlEmail").value;
  location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent("Please add me: " + em)}`;
  document.getElementById("nlNote").textContent = "Thanks! You're on the list.";
});
// close mobile menu when tapping outside it
document.addEventListener("click", e => { if (links.classList.contains("open") && !e.target.closest(".nav-links,.nav-toggle")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle.setAttribute("aria-expanded", false)));

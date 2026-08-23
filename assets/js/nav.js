// Mobiel menu — vervangt bootstrap.bundle.min.js (83 kB) en jQuery (~30 kB).
//
// De navbar-collapse was het enige Bootstrap-JS-onderdeel dat deze site echt
// gebruikte: er wordt nergens een dropdown, modal, carousel of tooltip
// gerenderd. Deze ~40 regels doen hetzelfde, inclusief het bijwerken van
// aria-expanded en sluiten met Escape.
(function () {
  var toggle = document.querySelector('.navbar-toggler[data-toggle="collapse"]');
  if (!toggle) return;

  var target = document.querySelector(toggle.getAttribute("data-target"));
  if (!target) return;

  function isOpen() {
    return target.classList.contains("show");
  }

  function setOpen(open) {
    target.classList.toggle("show", open);
    toggle.classList.toggle("collapsed", !open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    setOpen(!isOpen());
  });

  // Sluiten na het kiezen van een menu-item, anders blijft het menu op mobiel
  // openstaan over de nieuwe pagina heen.
  target.addEventListener("click", function (e) {
    if (e.target.closest("a") && isOpen()) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  setOpen(false);
})();

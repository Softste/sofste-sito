// Sofste — comportamenti minimi: menu mobile e invio del modulo di contatto.
(function () {
  "use strict";

  // ----- Menu mobile -----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Dopo il clic su una voce il menu si richiude
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ----- Modulo di contatto -----
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = form.querySelector(".form__status");
  var button = form.querySelector('button[type="submit"]');

  function showStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    button.disabled = true;
    showStatus("Invio in corso…");

    // Netlify Forms riceve i dati sulla pagina stessa, in formato urlencoded
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Risposta " + response.status);
        form.reset();
        showStatus("Messaggio inviato. Ti rispondiamo al più presto.");
      })
      .catch(function () {
        showStatus("Invio non riuscito. Riprova tra qualche minuto.", true);
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();

// Booking form. Set data-endpoint="https://..." on the <form> to post submissions
// (Formspree, HubSpot, a CRM webhook — anything that accepts a JSON POST).
document.querySelectorAll("[data-booking-form]").forEach((form) => {
  const status = form.querySelector(".form__status");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      status.textContent = "Booking isn't connected yet. Set the form's endpoint before launch.";
      return;
    }
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    status.textContent = "Sending…";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = "Thanks. We'll be in touch to find a time.";
    } catch {
      status.textContent = "Something went wrong. Please try again.";
    } finally {
      button.disabled = false;
    }
  });
});

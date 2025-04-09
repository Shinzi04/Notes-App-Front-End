const form = document.querySelector("note-form form");
const noteTitleInput = form.elements["note-title"];
const noteBodyInput = form.elements["note-body"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const customValidation = (e) => {
  e.target.setCustomValidity("");
  if (e.target.validity.valueMissing) {
    e.target.setCustomValidity("Harus diisi!!!");
    return;
  }

  if (e.target.validity.tooShort) {
    e.target.setCustomValidity("Minimal 6 karakter!");
    return;
  }
};

noteTitleInput.addEventListener("change", customValidation);
noteTitleInput.addEventListener("invalid", customValidation);

noteBodyInput.addEventListener("invalid", customValidation);
noteBodyInput.addEventListener("change", customValidation);

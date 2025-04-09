class NoteForm extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement("style");
  }
  connectedCallback() {
    this.render();
    this.realTimeValidation();
  }
  updateStyle() {
    this._style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;    
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                font-weight: bold;
            }

            form input, form textarea {
                width: 100%;
                padding: 0.25rem;
                font-family: "Times New Roman", Times, serif;
                font-size: 1rem;
            }

            input:focus,
                textarea:focus {
                outline: none;
                border-color: #333;
            }

            .form-section {
                text-align: center;
            }

            form input {
                padding: 0.5rem;
                border: 1px solid darkgrey;
            }

            form textarea {
                resize: none;
                height: 7rem;
            }

            form button[type="submit"] {
                appearance: none;
                background-color: #333;
                color: #fff;
                padding: 0.5rem;
                border: none;
                cursor: pointer;
                width: 100%;
            }
        `;
  }
  render() {
    this.updateStyle();
    this.innerHTML = `
            ${this._style.outerHTML}
            <form>
                <div class="form-section">
                    <label for="note-title">Judul Catatan</label><br>
                    <input type="text" name="note-title" id="note-title" required minlength="6" maxlength="30 autocomplete="off">
                    <p class="title-invalid" style="color: red; text-align: left; margin-top: 0.25rem"></p>
                </div>
                <div class="form-section">
                    <label for="note-body">Catatan</label><br>
                    <textarea name="note-body" id="note-body" required maxlength="200 autocomplete="off"></textarea>
                    <p class="body-invalid" style="color: red; text-align: left; margin-top: 0.25rem"></p>
                </div>
                <div class="form-section"><button type="submit">Submit</button></div>
            </form>
        `;
  }

  realTimeValidation() {
    const form = this.querySelector("form");
    const titleInput = form.elements["note-title"];
    const bodyInput = form.elements["note-body"];
    const titleError = this.querySelector(".title-invalid");
    const bodyError = this.querySelector(".body-invalid");

    titleInput.addEventListener("input", () => {
      if (titleInput.validity.valueMissing) {
        titleError.textContent = "Judul tidak boleh kosong";
      } else if (titleInput.validity.tooShort) {
        titleError.textContent = "Judul minimal 6 karakter";
      } else {
        titleError.textContent = "";
      }
    });

    bodyInput.addEventListener("input", () => {
      if (bodyInput.validity.valueMissing) {
        bodyError.textContent = "Catatan tidak boleh kosong";
      } else {
        bodyError.textContent = "";
      }
    });
  }
}

customElements.define("note-form", NoteForm);

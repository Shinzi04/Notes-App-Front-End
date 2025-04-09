class NoteItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._note = {
      id: "NEED_ID",
      title: "NEED_TITLE",
      body: "NEED_BODY",
      createdAt: "NEED_CREATED_AT",
      archived: false,
    };
    this._style = document.createElement("style");
  }
  setNote(value) {
    this._note["id"] = value.id;
    this._note["title"] = value.title;
    this._note["body"] = value.body;
    this._note["createdAt"] = value.createdAt;
    this._note["archived"] = value.archived;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: flex;
                flex-direction: column;
                background-color: #fff;
                border-radius: 0.5rem;
                box-shadow: 0 0 2px 2px #33333377;
                padding: 0.5rem;
                justify-content: space-between;
               
            }
            
           .note-item__date {
                margin-block-start: 0;
                color:gray;
                text-align: right;
            }
            
            .note-item__content {
                display: flex;
                padding: 0.5rem 0;
                flex-direction: column;
                gap: 0.5rem;
                height: 100%;
                text-align: justify;
                overflow: hidden;
            }

            .note-item__title {
                font-weight: bold;
            }

            .note-item__id {
                color:gray;
            }
            
            .note-item__archive {
                background-color: #333;
                color: white;
                font-weight: bold;
                border: none;
                border-radius: 0.5rem;
                padding: 0.5rem;
                margin: 0.5rem 0;
                cursor: pointer;
                text-transform: uppercase;
            }
        `;
  }

  render() {
    this.updateStyle();
    this.setAttribute("data-id", this._note.id);
    this._shadowRoot.innerHTML = "";
    this._shadowRoot.innerHTML = `
            ${this._style.outerHTML}
            <p class="note-item__id">${this._note.id}</p>
            <section class="note-item__content">
                <h3 class="note-item__title">${this._note.title}</h3>
                <p class="note-item__body">${this._note.body}</p>
                </section>
            <button class="note-item__archive">${this._note.archived ? "Unarchive" : "Archive"}</button>
            <p class="note-item__date">${new Intl.DateTimeFormat("id-ID").format(new Date(this._note.createdAt))}</p>


        `;
  }
}

customElements.define("note-item", NoteItem);

class NoteList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._notes = [];
    this._style = document.createElement("style");
  }

  setNotes(value) {
    this._notes = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.innerHTML = `
            :host {
                grid-area: "container";
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                grid-auto-rows: 250px;
                gap: 1rem;
            }
        `;
  }
  render() {
    this.updateStyle();
    this._shadowRoot.innerHTML = "";
    const noteItemElements = this._notes.map((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.setNote(note);
      return noteItem;
    });
    this._shadowRoot.append(this._style, ...noteItemElements);
  }
}

customElements.define("note-list", NoteList);

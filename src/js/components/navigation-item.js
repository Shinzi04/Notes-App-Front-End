class NavigationItem extends HTMLElement {
  static get observedAttributes() {
    return ["icon"];
  }
  constructor() {
    super();
    this._icon = this.getAttribute("icon");
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.innerHTML = `
            .navigation-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                color : white;
                border: 1px solid white;
                padding: 1rem;
                transition: transform 0.3s ease-in-out;
            }

            .navigation-item:hover {
                transform: scale(1.1);
            }
        `;
  }
  render() {
    this.updateStyle();
    this.innerHTML = `
            ${this._style.outerHTML}
            <div class="navigation-item">
                <p>${this.getAttribute("icon-name")}</p>
            </div>
        `;
    this.appendChild(this._style);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.define("navigation-item", NavigationItem);

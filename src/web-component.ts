declare var customElements;

export const customElement = (componentClass, options = {}) => class extends HTMLElement {
  private _shadowRoot;
  private _component;
  public on;
  public run;
  constructor() {
    super();
  }
  get component() { return this._component; }
  get state() { return this._component.state; }

  connectedCallback() {
    if (this.isConnected && !this._component) {
      const opts = { render: true, shadow: false, ...options };
      this._shadowRoot = opts.shadow ?
        this.attachShadow({ mode: 'open' }) : this;
      const props = {}
      Array.from(this.attributes).forEach(item => props[item.name] = item.value);
      if (this.children) {
        props['children'] = Array.from(this.children);
        props['children'].forEach(el => el.parentElement.removeChild(el));
      }
      this._component = new componentClass(props).mount(this._shadowRoot, opts);
      this.on = this._component.on.bind(this._component);
      this.run = this._component.run.bind(this._component);
    }
  }

  disconnectedCallback() {
    this._component.unmount();
    this._component = null;
  }
}

export default (name: string, componentClass, options?) => {
  customElements && customElements.define(name, customElement(componentClass, options))
}
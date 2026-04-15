import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-footer";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-nittanyNavy);
        padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
        text-align: center;
      }
      p {
        color: white;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        margin: 0;
      }
    `];
  }

  render() {
    return html`
      <p>© 2026 National Pencil Sharpening Association. All Rights Reserved.</p>
    `;
  }
}

globalThis.customElements.define(NpsaFooter.tag, NpsaFooter);
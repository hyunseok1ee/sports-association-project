import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaHeroBanner extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-hero-banner";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: white;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
        text-align: center;
      }
      .logo {
        height: 300px;
        margin-bottom: var(--ddd-spacing-6);
      }
      h1 {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-4);
      }
      p {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-m);
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
      }
    `];
  }

  render() {
    return html`
      <img class="logo" src="assets/npsa.png" alt="NPSA Logo" />
      <h1>National Pencil Sharpening Association</h1>
      <p>
        We are dedicated to the art and science of pencil sharpening.
        Join our community of passionate sharpeners from across the nation
        and discover the perfect edge.
      </p>
    `;
  }
}

globalThis.customElements.define(NpsaHeroBanner.tag, NpsaHeroBanner);
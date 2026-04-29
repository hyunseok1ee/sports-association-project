import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

console.log('npsa-member-card.js loaded');

export class NpsaMemberCard extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-member-card";
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      position: { type: String },
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.position = "";
    this.image = "";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        text-align: center;
        width: 200px;
      }
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid light-dark(var(--ddd-theme-default-keystoneYellow), var(--ddd-theme-default-roarGolden));
        margin-bottom: var(--ddd-spacing-3);
      }
      .member-name {
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
        margin: 0 0 var(--ddd-spacing-1) 0;
      }
      .member-position {
        color: light-dark(var(--ddd-theme-default-keystoneYellow), var(--ddd-theme-default-roarGolden));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        margin: 0;
      }
    `];
  }

  render() {
    console.log('npsa-member-card.js rendering');
    return html`
      <img src="${this.image}" alt="${this.name}" />
      <p class="member-name">${this.name}</p>
      <p class="member-position">${this.position}</p>
    `;
  }
}

globalThis.customElements.define(NpsaMemberCard.tag, NpsaMemberCard);
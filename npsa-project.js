/**
 * Copyright 2026 Hyunseok Lee & Dylan Dayrit
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import './npsa-nav-bar.js';
import './npsa-nav-dropdown.js';
import './npsa-hero-banner.js';
import './npsa-stat-counter.js';
import './npsa-about-band.js';
import './npsa-news-card.js';
import './npsa-schedule-card.js';
import './npsa-schedule-band.js';
import './npsa-team-card.js';
import './npsa-footer.js';

/**
 * `sports-association-project`
 * 
 * @demo index.html
 * @element sports-association-project
 */
export class SportsAssociationProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "sports-association-project";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--sports-association-project-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h3><span>${this.t.title}:</span> ${this.title}</h3>
        <slot></slot>
      </div>`;
  }
}

globalThis.customElements.define(SportsAssociationProject.tag, SportsAssociationProject);
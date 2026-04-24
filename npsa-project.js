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
 * `npsa-project`
 * 
 * @demo index.html
 * @element npsa-project
 */
export class NpsaProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "npsa-project";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.page = 'home';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      page: { type: String },
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

  _renderPage() {
  switch(this.page) {
    case 'home': return html`<npsa-hero-banner></npsa-hero-banner>`;
    case 'schedule-full': return html`<npsa-schedule-band></npsa-schedule-band>`;
    case 'schedule-games': return html`<npsa-schedule-band></npsa-schedule-band>`;
    case 'schedule-practice': return html`<npsa-schedule-band></npsa-schedule-band>`;
    case 'team-a': return html`<npsa-team-card team="a"></npsa-team-card>`;
    case 'team-b': return html`<npsa-team-card team="b"></npsa-team-card>`;
    case 'team-c': return html`<npsa-team-card team="c"></npsa-team-card>`;
    case 'join': return html`<npsa-join></npsa-join>`;
    default: return html`<npsa-hero-banner></npsa-hero-banner>`;
  }
}

  // Lit render the HTML
  render() {
    return html`
      <npsa-nav-bar @nav-changed=${(e) => this.page = e.detail.slug}></npsa-nav-bar>
      <main>
        ${this._renderPage()}
        <npsa-stat-counter></npsa-stat-counter>
        <npsa-about-band></npsa-about-band>
        <npsa-news-card></npsa-news-card>
      </main>
      <npsa-footer></npsa-footer>
    `;
  }

}

globalThis.customElements.define(NpsaProject.tag, NpsaProject);
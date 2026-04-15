import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaNavBar extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-nav-bar";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-keystoneYellow);
        padding: var(--ddd-spacing-5) var(--ddd-spacing-8);
      }
      .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        height: 150px;
      }
      .nav-links {
        display: flex;
        gap: var(--ddd-spacing-10);
      }
      a {
        color: var(--ddd-theme-default-nittanyNavy);
        text-decoration: none;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-l);
        font-weight: bold;
      }
      a:hover {
        color: var(--ddd-theme-default-original87Pink);
      }
    `];
  }

  render() {
    return html`
      <div class="nav-wrapper">
        <img class="logo" src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/npsa.png"alt="NPSA Logo" />
        <nav class="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/teams">Teams</a>
          <a href="/schedule">Schedule</a>
          <a href="/join">Join</a>
        </nav>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaNavBar.tag, NpsaNavBar);
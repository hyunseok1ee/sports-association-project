import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaNavBar extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-nav-bar";
  }

  static get properties() {
    return {
      ...super.properties,
      openMenu: { type: String }, // tracks which menu is open
    };
  }

  constructor() {
    super();
    this.openMenu = null;
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }

  // Adds event listener to detect clicks outside of dropdowns to close them
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleOutsideClick);
  }

  // Closes dropdowns when clicking outside of dropdown
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleOutsideClick);
  }

  _handleOutsideClick(e) {
    if (!e.composedPath().includes(this)) {
      this.openMenu = null;
    }
  }

  _toggleMenu(name) {
    this.openMenu = this.openMenu === name ? null : name;
  }

  _navigate(slug) {
    this.dispatchEvent(new CustomEvent('nav-changed', {
      detail: { slug },
      bubbles: true,
      composed: true
    }));
    this.openMenu = null;
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-keystoneYellow);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-8);
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
        align-items: center;
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

      .dropdown {
        position: relative;
      }

      .dropdown-trigger {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-l);
        font-weight: bold;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .dropdown-trigger:hover {
        color: var(--ddd-theme-default-original87Pink);
      }

      .arrow {
        font-size: 0.6em;
        transition: transform 0.2s ease;
        display: inline-block;
      }
      .arrow.open {
        transform: rotate(180deg);
      }

      .dropdown-menu {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        background-color: var(--ddd-theme-default-keystoneYellow);
        border-top: 3px solid var(--ddd-theme-default-nittanyNavy);
        min-width: 160px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 100;
        flex-direction: column;
      }
      .dropdown-menu.open {
        display: flex;
      }
      .dropdown-menu a {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
        font-size: var(--ddd-font-size-m);
        white-space: nowrap;
        border-bottom: 1px solid rgba(0,0,0,0.08);
      }
      .dropdown-menu a:last-child {
        border-bottom: none;
      }
      .dropdown-menu a:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-keystoneYellow);
      }
    `];
  }

  render() {
    return html`
      <div class="nav-wrapper">
        <img class="logo" src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/npsa.png" alt="NPSA Logo" />
        <nav class="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>

          <div class="dropdown">
            <button class="dropdown-trigger" @click=${() => this._toggleMenu("teams")}>
              Teams <span class="arrow ${this.openMenu === "teams" ? "open" : ""}">▼</span>
            </button>
            <div class="dropdown-menu ${this.openMenu === "teams" ? "open" : ""}">
              <a @click=${() => this._navigate('team-a')}>Team A</a>
              <a @click=${() => this._navigate('team-b')}>Team B</a>
              <a @click=${() => this._navigate('team-c')}>Team C</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropdown-trigger" @click=${() => this._toggleMenu("schedule")}>
              Schedule <span class="arrow ${this.openMenu === "schedule" ? "open" : ""}">▼</span>
            </button>
            <div class="dropdown-menu ${this.openMenu === "schedule" ? "open" : ""}">
              <a @click=${() => this._navigate('schedule-full')}>Full</a>
              <a @click=${() => this._navigate('schedule-games')}>Games</a>
              <a @click=${() => this._navigate('schedule-practice')}>Practice</a>
            </div>
          </div>

          <a href="/join">Join</a>
        </nav>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaNavBar.tag, NpsaNavBar);
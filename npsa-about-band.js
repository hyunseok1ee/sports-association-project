import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaAboutBand extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-about-band";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: white;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
        text-align: center;
      }
      h2 {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-6);
      }
      .rules {
        max-width: 700px;
        margin: 0 auto;
        text-align: left;
      }
      .rule {
        display: flex;
        gap: var(--ddd-spacing-4);
        align-items: flex-start;
        margin-bottom: var(--ddd-spacing-4);
        padding: var(--ddd-spacing-4);
        border-left: 4px solid var(--ddd-theme-default-keystoneYellow);
      }
      .rule-number {
        color: var(--ddd-theme-default-keystoneYellow);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xl);
        font-weight: bold;
        min-width: 40px;
      }
      .rule-text {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-m);
        line-height: 1.6;
      }
    `];
  }

  render() {
    return html`
      <h2>How We Compete</h2>
      <div class="rules">
        <div class="rule">
          <span class="rule-number">01</span>
          <span class="rule-text">Each competitor has exactly 1 minute to sharpen as many pencils as possible.</span>
        </div>
        <div class="rule">
          <span class="rule-number">02</span>
          <span class="rule-text">The sharpness and quality of each pencil is judged by certified NPSA officials.</span>
        </div>
        <div class="rule">
          <span class="rule-number">03</span>
          <span class="rule-text">Team scores are calculated by combining the total number of pencils sharpened by all team members.</span>
        </div>
        <div class="rule">
          <span class="rule-number">04</span>
          <span class="rule-text">The team with the highest combined pencil count wins the championship.</span>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaAboutBand.tag, NpsaAboutBand);
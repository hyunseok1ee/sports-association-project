import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaScheduleCard extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-schedule-card";
  }

  static get properties() {
    return {
      ...super.properties,
      day: { type: Number },
      isCurrentMonth: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.day = 0;
    this.isCurrentMonth = true;
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
      }

      .card {
        background-color: white;
        min-height: 100px;
        padding: var(--ddd-spacing-2);
        box-sizing: border-box;
        position: relative;
      }

      .day-number {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
        color: var(--ddd-theme-default-nittanyNavy);
        line-height: 1;
      }

      .card.other-month .day-number {
        opacity: 0.5;
      }
    `];
  }

  render() {
    if (!this.day) {
      return html`<div class="card empty"></div>`;
    }

    return html`
      <div class="card ${!this.isCurrentMonth ? "other-month" : ""}">
        <span class="day-number">${this.day}</span>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaScheduleCard.tag, NpsaScheduleCard);
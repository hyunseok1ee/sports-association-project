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
      events: { type: Array },
    };
  }

  constructor() {
    super();
    this.day = 0;
    this.isCurrentMonth = true;
    this.events = [];
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
      .event {
        margin-top: var(--ddd-spacing-1);
        padding: 2px 4px;
        border-radius: 4px;
        font-family: var(--ddd-font-navigation);
        font-size: 10px;
        font-weight: bold;
        color: white;
      }
      .event.game {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .event.practice {
        background-color: var(--ddd-theme-default-original87Pink);
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
        ${this.events.map(event => html`
          <div class="event ${event.type}">
            ${event.type === 'game' ? `${event.home} vs ${event.away}` : 'Practice'}
          </div>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaScheduleCard.tag, NpsaScheduleCard);
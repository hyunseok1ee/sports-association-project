import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./npsa-schedule-card.js";

export class NpsaScheduleBand extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-schedule-band";
  }

  static get properties() {
    return {
      ...super.properties,
      currentYear: { type: Number },
      currentMonth: { type: Number },
    };
  }

  constructor() {
    super();
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  _prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
  }

  _nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
  }

  _buildCalendarDays() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    const cells = [];

    const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        cells.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
    }

    for (let d = 1; d <= daysInMonth; d++) {
        cells.push({ day: d, isCurrentMonth: true });
    }

    let nextMonthDay = 1;
    while (cells.length < 35) {
        cells.push({ day: nextMonthDay++, isCurrentMonth: false });
    }

    return cells;
}

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        padding: var(--ddd-spacing-6) var(--ddd-spacing-8);
        background-color: var(--ddd-theme-default-keystoneYellow);
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--ddd-spacing-4);
      }

      .month-title {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xl);
        font-weight: bold;
        color: var(--ddd-theme-default-nittanyNavy);
      }

      .nav-button {
        background: none;
        border: 2px solid var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-nittanyNavy);
        font-size: var(--ddd-font-size-l);
        font-weight: bold;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .nav-button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-keystoneYellow);
      }

      .day-labels {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-bottom: var(--ddd-spacing-1);
      }

      .day-label {
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        color: var(--ddd-theme-default-nittanyNavy);
        text-align: center;
        padding: var(--ddd-spacing-1) 0;
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 4px;
      }
    `];
  }

  render() {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const cells = this._buildCalendarDays();

    return html`
      <div class="calendar-header">
        <button class="nav-button" @click=${this._prevMonth}>&#8249;</button>
        <span class="month-title">${monthNames[this.currentMonth]} ${this.currentYear}</span>
        <button class="nav-button" @click=${this._nextMonth}>&#8250;</button>
      </div>

      <div class="day-labels">
        ${dayLabels.map(label => html`<div class="day-label">${label}</div>`)}
      </div>

      <div class="calendar-grid">
        ${cells.map(cell => html`
          <npsa-schedule-card
            .day=${cell.day}
            .isCurrentMonth=${cell.isCurrentMonth}
          ></npsa-schedule-card>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaScheduleBand.tag, NpsaScheduleBand);
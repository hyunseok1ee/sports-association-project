import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class NpsaScheduleCard extends DDDSuper(LitElement) {

    static get tag() {
        return 'npsa-schedule-card';
    }

    static get properties() {
        return {
            ...super.properties,
            date: { type: String },
            time: { type: String },
            event: { type: String },
        };
    }

    constructor() {
        super();
        this.date = '';
        this.time = '';
        this.event = '';
    }

    static get styles() {
        return [super.styles, css`
            :host {
                display: block;
                background-color: var(--ddd-theme-default-white);
            }
        `];
    }

    render() {
        return html`
            <div class="schedule-card">
                <h3>${this.event}</h3>
                <p>${this.date} at ${this.time}</p>
            </div>
            Hello World
        `;
    }

}
globalThis.customElements.define(NpsaScheduleCard.tag, NpsaScheduleCard);
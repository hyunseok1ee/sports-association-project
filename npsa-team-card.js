import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './npsa-member-card.js';

export class NpsaTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-team-card";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-nittanyNavy));
        padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
      }
      .team-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }
      h1 {
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xxl);
        margin-bottom: var(--ddd-spacing-2);
      }
      .slogan {
        color: light-dark(var(--ddd-theme-default-keystoneYellow), var(--ddd-theme-default-roarGolden));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-l);
        font-style: italic;
      }
      .achievements {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-10);
        flex-wrap: wrap;
      }
      .achievement-badge {
        background-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        color: light-dark(var(--ddd-theme-default-keystoneYellow), var(--ddd-theme-default-roarGolden));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: 20px;
        font-weight: bold;
      }
      h2 {
        color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-6);
        text-align: center;
      }
      .members {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-6);
        flex-wrap: wrap;
      }
      .member-card {
        text-align: center;
        width: 200px;
      }
      .member-card img {
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
      }
      .member-role {
        color: light-dark(var(--ddd-theme-default-keystoneYellow), var(--ddd-theme-default-roarGolden));
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
      }
    `];
  }

  render() {
    return html`
      <div class="team-header">
        <h1>Team A</h1>
        <p class="slogan">"Stay Sharp, Stay Ahead"</p>
      </div>

      <div class="achievements">
        <span class="achievement-badge">🏆 2022 National Champion</span>
        <span class="achievement-badge">🥇 2023 Regional Champion</span>
        <span class="achievement-badge">✏️ 2024 Most Pencils Sharpened</span>
      </div>

      <h2>Meet the Team</h2>
      <div class="members">
        <npsa-member-card name="James Carter" position="Team Captain" image="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_1.png"></npsa-member-card>
        <npsa-member-card name="Emily Rodriguez" position="Vice Captain" image="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_2.png"></npsa-member-card>
        <npsa-member-card name="Margaret Chen" position="Senior Sharpener" image="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_3.png"></npsa-member-card>
        <npsa-member-card name="Kevin Park" position="Sharpener" image="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_4.png"></npsa-member-card>
        <npsa-member-card name="Robert Williams" position="Sharpener" image="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_5.png"></npsa-member-card>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaTeamCard.tag, NpsaTeamCard);
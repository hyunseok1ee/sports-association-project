import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NpsaTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "npsa-team-card";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: white;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-8);
      }
      .team-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }
      h1 {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xxl);
        margin-bottom: var(--ddd-spacing-2);
      }
      .slogan {
        color: var(--ddd-theme-default-keystoneYellow);
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
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-keystoneYellow);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: 20px;
        font-weight: bold;
      }
      h2 {
        color: var(--ddd-theme-default-nittanyNavy);
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
        border: 4px solid var(--ddd-theme-default-keystoneYellow);
        margin-bottom: var(--ddd-spacing-3);
      }
      .member-name {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-m);
        font-weight: bold;
      }
      .member-role {
        color: var(--ddd-theme-default-keystoneYellow);
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
        <div class="member-card">
          <img src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_1.png" alt="James Carter" />
          <p class="member-name">James Carter</p>
          <p class="member-role">Team Captain</p>
        </div>
        <div class="member-card">
          <img src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_2.png" alt="Emily Rodriguez" />
          <p class="member-name">Emily Rodriguez</p>
          <p class="member-role">Vice Captain</p>
        </div>
        <div class="member-card">
          <img src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_3.png" alt="Margaret Chen" />
          <p class="member-name">Margaret Chen</p>
          <p class="member-role">Senior Sharpener</p>
        </div>
        <div class="member-card">
          <img src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_4.png" alt="Kevin Park" />
          <p class="member-name">Kevin Park</p>
          <p class="member-role">Sharpener</p>
        </div>
        <div class="member-card">
          <img src="https://raw.githubusercontent.com/hyunseok1ee/sports-association-project/main/assets/TEAM_A_5.png" alt="Robert Williams" />
          <p class="member-name">Robert Williams</p>
          <p class="member-role">Sharpener</p>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NpsaTeamCard.tag, NpsaTeamCard);
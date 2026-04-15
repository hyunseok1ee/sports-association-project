import { html, fixture, expect } from '@open-wc/testing';
import "../npsa-project.js";

describe("NpsaProject test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <npsa-project
        title="title"
      ></npsa-project>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

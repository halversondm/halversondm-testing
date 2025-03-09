import { test, expect } from "@playwright/test";

test.describe("Testing ABC App on halversondm.com", () => {
  test("Save Test", async ({ page }) => {
    await page.goto("https://halversondm.com/");
    await page.getByRole("link", { name: "Apps" }).click();
    await page.locator("p:nth-child(11) > .btn").first().click();
    await page.getByRole("button", { name: "Now" }).click();
    await page
      .getByRole("radio", { name: "Given Direction/task, asked" })
      .check();
    await page.getByRole("radio", { name: "Home" }).check();
    await page.getByRole("checkbox", { name: "Mom" }).check();
    await page
      .getByRole("checkbox", { name: "Refuse to follow directions" })
      .check();
    await page.getByRole("checkbox", { name: "Makes verbal threats" }).check();
    await page.getByRole("radio", { name: "- 5 min" }).check();
    await page.getByRole("radio", { name: "Low" }).check();
    await page.getByRole("checkbox", { name: "Verbal Redirection" }).check();
    await page.getByRole("button", { name: "Save" }).click();
  });
});

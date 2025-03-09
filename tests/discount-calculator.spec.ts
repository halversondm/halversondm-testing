import { test, expect } from "@playwright/test";

test.describe("Discount Calculator App", () => {
  test("Cheap!", async ({ page }) => {
    await page.goto("https://halversondm.com/");
    await page.getByRole("link", { name: "Apps" }).click();
    await page.locator(".btn").first().click();
    await page.getByRole("spinbutton", { name: "Label Price" }).click();
    await page.getByRole("spinbutton", { name: "Label Price" }).fill("100.23");
    await page.getByRole("spinbutton", { name: "Label Price" }).press("Tab");
    await page.getByRole("spinbutton", { name: "Discount #1" }).fill("80");
    await page.getByRole("spinbutton", { name: "Discount #1" }).press("Tab");
    await page.getByRole("spinbutton", { name: "Discount #2" }).fill("20");
    await page.getByRole("button", { name: "Calculate" }).click();
    await expect(page.locator("#successMessage")).toContainText(
      "×Your final price is $16.04 plus tax",
    );
  });
});

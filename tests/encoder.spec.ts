import { test, expect } from "@playwright/test";

test.describe("Encoder and Decoder App", () => {
  test("Encoder", async ({ page }) => {
    await page.goto("https://halversondm.com/");
    await page.getByRole("link", { name: "Apps" }).click();
    await page.locator("div:nth-child(2) > p:nth-child(7) > .btn").click();
    await page.locator("#encodeInput").click();
    await page.locator("#encodeInput").fill("jpmc1234");
    await page.getByRole("button", { name: "Encode" }).click();
    await expect(page.locator("#encodeOutput")).toContainText("anBtYzEyMzQ=");
    await page
      .locator("#encodeTab")
      .getByRole("button", { name: "Clear" })
      .click();
    await expect(page.locator("#encodeInput")).toBeEmpty();
    await expect(page.locator("#encodeOutput")).toBeEmpty();
  });

  test("Decoder", async ({ page }) => {
    await page.goto("https://halversondm.com/");
    await page.getByRole("link", { name: "Apps" }).click();
    await page.locator("div:nth-child(2) > p:nth-child(7) > .btn").click();
    await page.locator("#decodeInput").click();
    await page.locator("#decodeInput").fill("anBtYzEyMzQ=");
    await page.getByRole("button", { name: "Decode" }).click();
    await expect(page.locator("#decodeOutput")).toContainText("jpmc1234");
    await page
      .locator("#decodeTab")
      .getByRole("button", { name: "Clear" })
      .click();
    await expect(page.locator("#decodeInput")).toBeEmpty();
    await expect(page.locator("#decodeOutput")).toBeEmpty();
  });
});

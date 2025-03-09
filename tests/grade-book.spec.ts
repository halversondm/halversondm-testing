import { test, expect } from "@playwright/test";

test.describe("Grade Book", () => {
  test("Add a Student, Calc Grade and Remove", async ({ page }) => {
    await page.goto("https://halversondm.com/");
    await page.getByRole("link", { name: "Apps" }).click();
    await page.locator("div:nth-child(2) > p:nth-child(11) > .btn").click();
    await page.getByRole("spinbutton", { name: "Student Number" }).click();
    await page.getByRole("spinbutton", { name: "Student Number" }).fill("1");
    await page.getByRole("spinbutton", { name: "Student Number" }).press("Tab");
    await page.getByRole("spinbutton", { name: "Quiz 1 Grade" }).fill("5");
    await page.getByRole("spinbutton", { name: "Quiz 1 Grade" }).press("Tab");
    await page.getByRole("spinbutton", { name: "Quiz 2 Grade" }).fill("8");
    await page.getByRole("spinbutton", { name: "Quiz 2 Grade" }).press("Tab");
    await page
      .getByRole("spinbutton", { name: "Midterm Exam Grade" })
      .fill("80");
    await page
      .getByRole("spinbutton", { name: "Midterm Exam Grade" })
      .press("Tab");
    await page.getByRole("spinbutton", { name: "Final Exam Grade" }).fill("95");
    await page.getByRole("button", { name: "+ Add Student" }).click();
    await expect(page.locator("#classAverage0")).toContainText("84");
    await expect(page.locator("#letterGrade0")).toContainText("B");
    await expect(page.locator("#quiz10")).toContainText("5");
    await expect(page.locator("#quiz20")).toContainText("8");
    await expect(page.locator("#midterm0")).toContainText("80");
    await expect(page.locator("#final0")).toContainText("95");
    await expect(page.locator("#studentNumber0")).toContainText("1");
    await page.getByRole("button", { name: "- Remove Student" }).click();
  });
});

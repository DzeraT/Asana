import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import { ProjectPage } from "../pageObjectModel/projectPage";

test.describe("Asana Project", () => {
  test.beforeEach(async ({ page }) => {
    await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
  });
  test("Test Case 2", async ({ page }) => {
    const projectPage = new ProjectPage(page);

    await projectPage.clickProjectLink();
    await projectPage.toDoColumn.filter({hasText: 'Schedule kickoff meeting'})//Verify "Schedule kickoff meeting" is in the "To do" column.
    await projectPage.toDoColumn.filter({hasText: 'Medium'});//   Confirm tag: "Medium"
    await projectPage.toDoColumn.filter({hasText: 'At risk.'})// Confirm tag: "At risk."
    
  });
});

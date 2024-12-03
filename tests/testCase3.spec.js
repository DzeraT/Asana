import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import { ProjectPage } from "../pageObjectModel/projectPage";
test.describe("Asana Project", () => {
  test.beforeEach(async ({ page }) => {
    await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
  });
  test("Test Case 3", async ({ page }) => {
    const projectPage = new ProjectPage(page);

    await projectPage.clickProjectLink();
    await projectPage.toDoColumn.filter({hasText: 'Share timeline with teammates'})//Verify "Share timeline with teammates" is in the "To do" column.
    await projectPage.toDoColumn.filter({hasText: 'High'}) //High priority tag
    await projectPage.toDoColumn.filter({hasText: 'Off track'})// Off track tag
   
  });
});

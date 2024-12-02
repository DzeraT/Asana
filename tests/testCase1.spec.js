import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import { ProjectPage } from "../pageObjectModel/projectPage";
test.describe("Asana Project", () => {
  // beforeEach test (Stored Log In Method into BeforeEach to run in the beginning of all Test Cases)

  test.beforeEach(async ({ page }) => {
    await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
  });

  // Test case 1:

  test("Test Case 1", async ({ page }) => {
    const projectPage = new ProjectPage(page);

    await projectPage.clickProjectLink();
    await projectPage.toDoColumn.filter({hasText: 'Draft project brief'})//Verify "Draft project brief" is in the "To do" column.
    await projectPage.assertDraftProjectBriefName();
    await projectPage.toDoColumn.filter({hasText: 'Non-Priority'})// Confirm "Non-Priority" tag
    await projectPage.toDoColumn.filter({hasText: 'On track'})// Confirm "On track" tag
    // await projectPage.assertNonPriorityTag();
    // await projectPage.assertOnTrackStatus();
  });
});

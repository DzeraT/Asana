import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import { WorkRequestPage } from "../pageObjectModel/workRequests";

test.describe("Asana Project", () => {
  test.beforeEach(async ({ page }) => {
    await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
  });
  test("Test Case 6", async ({ page }) => {
    const workRequests = new WorkRequestPage(page);
    await workRequests.clickWorkRequests(); //Navigate to "Work Requests."
    await workRequests.completed.filter({
      hasText: "[Example] New keycard for Daniela V",
    }); //Verify "[Example] New keycard for Daniela V" is in the "Completed" column.
    await workRequests.completed.filter({ hasText: "Low effort" });//Confirm "Low effort" tag
    await workRequests.completed.filter({ hasText: "New hardware" });//Confirm "New hardware" tag
    await workRequests.completed.filter({ hasText: "High Priority" });//Confirm "High priority" tag
    await workRequests.completed.filter({ hasText: "Done" });// Confirm "Done" tag
  });
});

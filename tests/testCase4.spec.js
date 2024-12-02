import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import {WorkRequestPage} from "../pageObjectModel/workRequests";

test.describe("Asana Project", () => {
    test.beforeEach(async ({ page }) => {
      await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
    });
    test("Test Case 4", async ({ page }) => {
        const workRequests = new WorkRequestPage(page)
        await workRequests.clickWorkRequests();//Navigate to "Work Requests."
        workRequests.newRequests.filter({hasText: '[Example] Laptop setup for new hire'})//Verify "[Example] Laptop setup for new hire" is in the "New Requests" column.
        workRequests.newRequests.filter({hasText: 'Medium priority'})//Confirm "Medium priority" tag
        workRequests.newRequests.filter({hasText: 'Low effort'})// Confirm "Low effort" tag
        workRequests.newRequests.filter({hasText: 'New hardware'})// Confirm "New hardware" tag
        workRequests.newRequests.filter({hasText: 'Not Started'})// Confirm "Not Started" status
    });
  });
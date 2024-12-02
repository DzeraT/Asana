import { test, expect } from "@playwright/test";
import { loginHelper, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "./loginHelper";
import {WorkRequestPage} from "../pageObjectModel/workRequests";

test.describe("Asana Project", () => {
    test.beforeEach(async ({ page }) => {
      await loginHelper(page, DEFAULT_USERNAME, DEFAULT_PASSWORD);
    });
    test("Test Case 5", async ({ page }) => {
        const workRequests = new WorkRequestPage(page)
        await workRequests.clickWorkRequests();//Navigate to "Work Requests."
        await workRequests.inProgress.filter({hasText: '[Example] Password not working'})//Verify "[Example] Password not working" is in the "In Progress" column.
        await workRequests.inProgress.filter({hasText: 'Low priority'})//Confirm "Low priority" tag
        await workRequests.inProgress.filter({hasText: 'Low effort'})// Confirm "Low effort" tag
        await workRequests.inProgress.filter({hasText: 'Password reset'})// Confirm "Password reset" tag
        await workRequests.inProgress.filter({hasText: 'Waiting'})// Confirm "Waiting" status
    })
})
import { LoginPage } from "../pageObjectModel/login";

export async function loginHelper(page, username, password) {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
}
// Constants for testing
export const DEFAULT_USERNAME = "ben+pose@workwithloop.com";
export const DEFAULT_PASSWORD = "Password123";

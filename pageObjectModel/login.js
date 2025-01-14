class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "https://app.asana.com/-/login";
    this.emailInput = page.locator('//div[@class="ValidatedInput"]//input');
    this.continueButton = page.locator(
      "(//div[@role='button' and contains(text(), 'Continue')])[2]" 
    );
    this.passwordInput = page.locator(
      '//input[@autocomplete="current-password"]'// Locators are too long. In the future, we may want to shorten them to more concise selectors
      // to reduce flakiness. We can do this by adding test ID attributes to our elements,
      //for instance. I had to use index instead of going from parent to child because of the long length of locators.
    );
    this.loginButton = page.locator(
      "//div[@class='ButtonThemeablePresentation--isEnabled ButtonThemeablePresentation ButtonThemeablePresentation--large LoginButton LoginPasswordForm-loginButton Stack Stack--align-center Stack--direction-row Stack--display-inline Stack--justify-center']"
    );
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForTimeout(3000);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async waitForNavigation() {
    await this.page.waitForNavigation({ waitUntil: "networkidle" });
  }

  async login(email, password) {
    await this.navigate();
    await this.enterEmail(email);
    await this.clickContinue();
    await this.enterPassword(password);
    await this.clickLogin();
    await this.waitForNavigation();
  }
}

export { LoginPage };

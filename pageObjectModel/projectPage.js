// projectPage.js
import { expect } from "@playwright/test";
export class ProjectPage {
  constructor(page) {
    this.page = page;
    // Locators are too long. In the future, we may want to shorten them to more concise selectors
    // to reduce flakiness. We can do this by adding test ID attributes to our elements,
    //for instance. I had to use index instead of going from parent to child because of the long length of locators.
    this.projectLink = page.locator(
      "//span[contains(@class, 'TypographyPresentation--colorNavigation') and contains(@class, 'TypographyPresentation--overflowTruncate') and contains(@class, 'TypographyPresentation--medium') and contains(., 'Cross-functional project plan, Project')]"
    );
    this.toDoColumn = page.locator(
      "//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][2]"
    );
    this.draftProjectBriefInToDoColumn = page.locator(
      "//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][2]//div[@class='CommentOnlyBoardColumnCardsContainer-itemContainer'][1]//span[@class='TypographyPresentation TypographyPresentation--medium BoardCard-taskName']"
    );
  }

  async clickProjectLink() {
    await this.projectLink.click();
  }
}

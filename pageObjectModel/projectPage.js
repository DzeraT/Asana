// projectPage.js
import { expect } from "@playwright/test";
export class ProjectPage {
  constructor(page) {
    this.page = page;
    this.projectLink = page.locator(
      "//span[contains(@class, 'TypographyPresentation--colorNavigation') and contains(@class, 'TypographyPresentation--overflowTruncate') and contains(@class, 'TypographyPresentation--medium') and contains(., 'Cross-functional project plan, Project')]"
    );
    this.toDoColumn = page.locator(
      "//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][2]"
    );
    this.draftProjectBriefInToDoColumn = page.locator(
      "//div[@class='CommentOnlyBoardColumn CommentOnlyBoardBody-column'][2]//div[@class='CommentOnlyBoardColumnCardsContainer-itemContainer'][1]//span[@class='TypographyPresentation TypographyPresentation--medium BoardCard-taskName']"
    );
    this.nonPriority = page.locator(
      "//div[@class='BoardCardCustomPropertiesAndTags'][1]//div[@class='PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorRed Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4'][1]//span[contains(text(), 'Non-Priority')]"
    );
    this.onTrackElement = page.locator(
      "//div[@class='PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorBlueGreen Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4']//span[contains(text(), 'On track')]"
    );
    this.scheduleKickoffMeeting = this.page.locator('//div[@class="BoardCardLayout-contentAboveSubtasks"]//span[@class="TypographyPresentation TypographyPresentation--medium BoardCard-taskName"]').filter({ hasText: 'Schedule kickoff meeting' });
    this.tagMedium = this.page.locator('//div[@class="PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorYellowOrange Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4"]/span[@class="TypographyPresentation TypographyPresentation--overflowTruncate" and text()="Medium"]');
    this.tagAtRisk = this.page.locator('//div[@class="PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorYellow Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4"]/span[@class="TypographyPresentation TypographyPresentation--overflowTruncate" and text()="At risk"]');

    this.shareTimelineTask = page.locator('//div[@class="BoardCardLayout-titleAndIndicator"]//span[@class="BoardCardLayout-title"]/span[contains(., "Share timeline with teammates")]');
    this.highPriorityTag = page.locator('//div[@class="PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorPurple Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4"]/span[contains(., "High")]');
    this.offTrackTag = page.locator('//div[@class="PillThemeablePresentation PillThemeablePresentation--small PillPresentation PillPresentation--colorRed Stack Stack--align-center Stack--direction-row Stack--display-block Stack--spacing-spacing-4"]/span[contains(., "Off track")]');
  }
  async assertShareTimelineTask() {
    await expect(this.shareTimelineTask).toHaveText('Share timeline with teammates');
  }

  async assertHighPriorityTag() {
    await expect(this.highPriorityTag).toHaveText('High');
  }

  async assertOffTrackTag() {
    await expect(this.offTrackTag).toHaveText('Off track');
  }
  async assertScheduleKickoffMeeting() {
    await expect(this.scheduleKickoffMeeting).toHaveText('Schedule kickoff meeting');
  }

  async assertTagMedium() {
    await expect(this.tagMedium).toHaveText('Medium');
  }

  async assertTagAtRisk() {
    await expect(this.tagAtRisk).toHaveText('At risk');
  }

  async clickProjectLink() {
    await this.projectLink.click();
  }

  async assertDraftProjectBriefName() {
    await expect(this.draftProjectBriefInToDoColumn).toHaveText(
      "Draft project brief"
    );
  }

  async assertNonPriorityTag() {
    await expect(this.nonPriority).toHaveText("Non-Priority");
  }

  async assertOnTrackStatus() {
    await expect(this.onTrackElement.first()).toHaveText("On track");
  }
  
}

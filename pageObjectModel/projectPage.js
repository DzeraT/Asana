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
  }
//   async assertShareTimelineTask() {
//     await expect(this.shareTimelineTask).toHaveText('Share timeline with teammates');
//   }


//   async assertScheduleKickoffMeeting() {
//     await expect(this.scheduleKickoffMeeting).toHaveText('Schedule kickoff meeting');
//   }



  async clickProjectLink() {
    await this.projectLink.click();
  }

//   async assertDraftProjectBriefName() {
//     await expect(this.draftProjectBriefInToDoColumn).toHaveText(
//       "Draft project brief"
//     );
//   }


  
}

class WorkRequestPage {
  constructor(page) {
    this.page = page;
    // Work Requests sidebar icon locator
    this.workRequestsSideBar = page.locator(
      '//a[@aria-label="Work Requests, Project"]'
    );
    //newRequests column locator
    this.newRequests = page.locator(
      '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][1]'
    );
    //In Progress column locator
    this.inProgress = page.locator(
      '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][3]'
    );
    //Completed column locator
    this.completed = page.locator(
      '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][4]'
    );
  }
  async clickWorkRequests() {
    // Click on the Work Requests sidebar icon
    await this.workRequestsSideBar.click();
  }
}

module.exports = { WorkRequestPage };

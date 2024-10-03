import { type Locator, type Page } from '@playwright/test';

export class LetcodeWindowsPage {
    readonly openHomePageBtn: Locator = this.page.locator('#home');

    constructor(readonly page: Page) { }

    async goto() {
        this.page.goto('https://letcode.in/windows');
    }

    async clickOnOpenHomePageBtn(): Promise<void> {
        await this.openHomePageBtn.click();
    }
}
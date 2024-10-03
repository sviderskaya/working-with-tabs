import { type Locator, type Page } from '@playwright/test';

export class QaPracticeVisualPage {
    readonly dynamicGif: Locator = this.page.locator('[src="https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"]');

    constructor(readonly page: Page) { }

    async goto(): Promise<void> {
        await this.page.goto('https://qa-practice.netlify.app/visual');
    }
}
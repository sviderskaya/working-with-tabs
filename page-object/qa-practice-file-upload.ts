import { type Locator, type Page } from '@playwright/test';
import path from 'path';

export class QaPracticeFileUploadPage {
    chooseFileBtn: Locator = this.page.locator('#file_upload');
    submitBtn: Locator = this.page.locator('[type="submit"]');
    successMessage: Locator = this.page.locator('#file_upload_response');

    constructor(readonly page: Page) { }

    async goto(): Promise<void> {
        await this.page.goto('https://qa-practice.netlify.app/file-upload');
    }

    async fileUpload(): Promise<void> {
        await this.chooseFileBtn.setInputFiles(path.join(__dirname, '../data/Screenshot 2024-09-22 at 11.01.20.png'));
        await this.submitBtn.click();
    }
}
import { test as advansedTest } from "@playwright/test";
import { LetcodeWindowsPage } from "../page-object/letcode-windows-page";
import { QaPracticeCalendarPage } from "../page-object/qa-practice-calendar-page";
import { QaPracticeFileUploadPage } from "../page-object/qa-practice-file-upload";
import { QaPracticeVisualPage } from "../page-object/qa-practice-visual-page";

const test = advansedTest.extend<{
    letcodeWindowsPage: LetcodeWindowsPage,
    qaPracticeCalendarPage: QaPracticeCalendarPage,
    qaPracticeFileUploadPage: QaPracticeFileUploadPage,
    qaPracticeVisualPage: QaPracticeVisualPage,
}>({
    letcodeWindowsPage: async ({ page }, use) => {
        const letcodeWindowsPage = new LetcodeWindowsPage(page);
        await use(letcodeWindowsPage)
    },
    qaPracticeCalendarPage: async ({ page }, use) => {
        const qaPracticeCalendarPage = new QaPracticeCalendarPage(page);
        await use(qaPracticeCalendarPage)
    },
    qaPracticeFileUploadPage: async ({ page }, use) => {
        const qaPracticeFileUploadPage = new QaPracticeFileUploadPage(page);
        await use(qaPracticeFileUploadPage)
    },
    qaPracticeVisualPage: async ({ page }, use) => {
        const qaPracticeVisualPage = new QaPracticeVisualPage(page);
        await use(qaPracticeVisualPage)
    },
})

export { test };
export { expect } from "@playwright/test";
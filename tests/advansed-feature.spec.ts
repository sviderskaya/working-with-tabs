import { test, expect } from "../fixtures/base-fixture";

test('should check the Test page is opened after clicking on the Open Home Page', async ({ 
    letcodeWindowsPage, 
    context
 }) => {
    const expectedUrlOnTestPage = 'https://letcode.in/test'
    await letcodeWindowsPage.goto();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        letcodeWindowsPage.clickOnOpenHomePageBtn()
    ]);

    await newPage.waitForLoadState();
    await expect(newPage.url()).toBe(expectedUrlOnTestPage);   
})

test('should pick a date from the calendar', async ({ qaPracticeCalendarPage }) => {
    const selectedDateData = {
        year: 2023,
        month: 9,
        day: 20
    };

    await qaPracticeCalendarPage.goto();
    await qaPracticeCalendarPage.selectDay(selectedDateData.year, selectedDateData.month, selectedDateData.day);

    const selectedDate = await qaPracticeCalendarPage.getSelectedDate();
    const [month, day, year] = selectedDate.split('/');
    const formattedSelectedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const expectedDate = `${selectedDateData.year}-${selectedDateData.month.toString().padStart(2, '0')}-${selectedDateData.day.toString().padStart(2, '0')}`;

    await expect(formattedSelectedDate).toBe(expectedDate);
})


test('should check file upload', async ({ qaPracticeFileUploadPage }) => {
    let message = 'You have successfully uploaded "Screenshot 2024-09-22 at 11.01.20.png"'
    await qaPracticeFileUploadPage.goto();
    await qaPracticeFileUploadPage.fileUpload();
    await expect(qaPracticeFileUploadPage.successMessage).toHaveText(message);
})

test('should check screenshot testing', async ({ qaPracticeVisualPage, page }) => {
    await qaPracticeVisualPage.goto();
    await expect(page).toHaveScreenshot({
        mask: [qaPracticeVisualPage.dynamicGif]
    });
})
import { type Locator, type Page } from '@playwright/test';
import { format, parse, isBefore, isAfter } from 'date-fns';

export class QaPracticeCalendarPage {
    readonly basicDatePicker: Locator = this.page.locator('#calendar');
    readonly currentMonth: Locator = this.page.locator('.datepicker-days .datepicker-switch');
    readonly nextMonth: Locator = this.page.locator('.datepicker-days .next');
    readonly previousMonth: Locator = this.page.locator('.datepicker-days .prev');
    readonly pickADateInput: Locator = this.page.locator('[placeholder = "Pick a date"]')

    constructor(readonly page: Page) { }

    async goto() {
        this.page.goto('https://qa-practice.netlify.app/calendar')
    }

    private datePicker(day: number): Locator {
        return this.page.locator(`.datepicker-days td.day`, { hasText: String(day) });
    }

    async selectDay(year: number, month: number, day: number): Promise<void> {
        await this.basicDatePicker.click();

        const selectedDate = new Date(year, month - 1, day);
        const dateFormat = format(selectedDate, 'MMMM yyyy');

        let currentMonthText = await this.currentMonth.textContent();

        while (currentMonthText !== dateFormat) {
            const currentDate = parse(currentMonthText || '', 'MMMM yyyy', new Date());

            if (isBefore(currentDate, selectedDate)) {
                await this.nextMonth.click();
            } else if (isAfter(currentDate, selectedDate)) {
                await this.previousMonth.click();
            }

            currentMonthText = await this.currentMonth.textContent();

            await this.datePicker(day).click();
        }
    }

    async getSelectedDate(): Promise<string> {
        return await this.pickADateInput.inputValue();
    }
}
import { test, expect, chromium, firefox } from "@playwright/test"

test("swith betweet tabs", async ({ page }) => {
    let pageContext = await page.context()

    await page.goto('https://www.rammstein.de/de/konzerte/barcelona-11-06-2024/')
    await page
        .click('//button[@class="cm-btn cm-btn-success"]')
    await page
        .click('//h4[@class="uppercase text-22-sm lg:text-38  lg:font-rodchenko-cond hyphens-none underline-animated-thick  hyphens" and text() ="News"]')

    let livePage = await pageContext.newPage()
    await livePage
        .goto('https://www.rammstein.de/de/konzerte/barcelona-11-06-2024/')
    await page
        .click('//h4[@class="uppercase text-22-sm lg:text-38  lg:font-rodchenko-cond hyphens-none underline-animated-thick  hyphens" and text() ="Live"]')

    await page
        .click('//h3[@class="uppercase text-30-sm lg:text-38  font-rodchenko-cond hyphens-none false hyphens" and text()= "Europe Stadium Tour 2024 Pre-Sale Start"]')
    await livePage
        .click('//button[@data-cy="button-button-undefined" and text() = "Tickets"][1]')
})

test("opening two browsers", async () => {
    let myChromium= await chromium.launch()
    let myContext = await myChromium.newContext()
    let myPage = await myContext.newPage()
    await myPage.goto("https://www.rammstein.de/de/")

    let myFirefox= await firefox.launch()
    let FirefoxContext = await myFirefox.newContext()
    let ffPage = await FirefoxContext.newPage()
    await ffPage.goto("https://community.rammstein.de/")

    await myPage.goto("https://youtube.com")
    await ffPage.goto("https://chat.openai.com/")
})
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
    
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:3000');
        jest.setTimeout(1000);
    
        await page.waitForSelector('.vent');
    
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
        browser.close();
      });
});
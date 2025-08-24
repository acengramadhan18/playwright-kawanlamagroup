import { Locator, test, Page, expect } from "@playwright/test";

import fs from 'fs';

const testDataPath = 'tests/data/data.json'

const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'))

for (const user of testData){
        test("As user i can login Linkedin", async ({page
            
        }) => {
            await page.goto("https://www.linkedin.com/");
            await page.getByRole('link', { name: 'Sign in', exact: true }).click();
            await page.getByLabel('Email or phone').fill(user.email);
            await page.getByLabel('Password').fill(user.password);
            await page.getByLabel('Sign in', { exact: true }).click();
            await page.getByText('Status is online Messaging').click();
        });
}
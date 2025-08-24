import { Locator, Page, expect } from "@playwright/test";

export class NetworkPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async mynetwork(){
        await this.page.goto('https://www.linkedin.com/mynetwork/grow/');
        await this.page.getByRole('tab', { name: 'Grow' }).click();
        await this.page.getByRole('tab', { name: 'Catch up' }).click();
        await this.page.getByLabel('All').click();
        await this.page.getByLabel('Job changes').click();
        await this.page.getByLabel('Birthdays').click();
        await this.page.getByLabel('Work anniversaries').click();
        await this.page.getByLabel('Education').click();
        await this.page.getByRole('button', { name: 'Manage my network Show more' }).click();
        await expect(this.page.getByLabel('See 170 connections')).toBeVisible();
        await expect(this.page.getByLabel('See people you follow and who')).toBeVisible();
        await expect(this.page.getByLabel('You have joined 0 groups,')).toBeVisible();
        await expect(this.page.getByLabel('You have 0 events, find')).toBeVisible();
        await expect(this.page.getByLabel('See 141 pages you follow')).toBeVisible();
        await expect(this.page.getByLabel('See 1 newsletter you')).toBeVisible();
        await expect(this.page.getByLabel('You follow 0 hashtags, find')).toBeVisible();
        
    }
    async connections(){
        await this.page.goto('https://www.linkedin.com/mynetwork/grow/');
        await this.page.getByRole('button', { name: 'Manage my network Show more' }).click();
        await this.page.getByLabel('See 170 connections').click();
        await expect(this.page.getByRole('heading', { name: 'Connections' })).toBeVisible();
        await expect(this.page.getByText('Sort by:')).toBeVisible();
        await this.page.getByLabel('Sort by, Recently Added').click();
        await this.page.getByLabel('Sort connections by first name').click();
        await expect(this.page.getByRole('link', { name: 'Member’s name Abdan Zam Zam' })).toBeVisible();
        await this.page.getByLabel('Sort by, First Name dropdown').click();
        await this.page.getByLabel('Sort connections by last name').click();
        await expect(this.page.getByRole('link', { name: 'Member’s name Kustoyo .' })).toBeVisible();
        await this.page.getByPlaceholder('Search by name').click();
        await this.page.getByPlaceholder('Search by name').fill('Onis');
        await expect(this.page.getByRole('link', { name: 'Member’s name Onis Arom' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Search with filters' }).click();
        await expect(this.page.getByRole('heading', { name: '164 results' })).toBeVisible();
        await this.page.getByLabel('Filter by: People').click();
        await expect(this.page.getByRole('button', { name: 'All', exact: true })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Selected People'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Jobs'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Posts'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Companies'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Products'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Groups'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Services'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Events'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Courses'})).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Schools'})).toBeVisible();
        await this.page.getByLabel('2nd').click();
        await this.page.getByLabel('3rd+').click();
        await this.page.getByLabel('Locations filter. Clicking').click();
        await this.page.getByPlaceholder('Add a location').fill('Jakarta');
        await this.page.getByPlaceholder('Add a location').clear();
        await this.page.locator('label').filter({ hasText: 'Indonesia Filter by Indonesia' }).click();
        await this.page.locator('label').filter({ hasText: 'Jakarta Metropolitan Area' }).click();
        await this.page.locator('label').filter({ hasText: 'Jakarta, Indonesia Filter by' }).click();
        await this.page.locator('label').filter({ hasText: 'United States Filter by' }).click();
        await this.page.locator('label').filter({ hasText: 'India Filter by India' }).click();
        await this.page.getByLabel('Cancel Locations filter').click();
        await this.page.getByLabel('Current company filter.').click();
        await this.page.getByPlaceholder('Add a company').fill('Metrocom Jaddi Technology');
        await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Add a company').clear();
        await this.page.locator('label').filter({ hasText: 'Microsoft Filter by Microsoft' }).click();
        await this.page.locator('label').filter({ hasText: 'LinkedIn Filter by LinkedIn' }).click();
        await this.page.locator('label').filter({ hasText: 'Google Filter by Google' }).click();
        await this.page.locator('label').filter({ hasText: 'YouTube Filter by YouTube' }).click();
        await this.page.locator('label').filter({ hasText: 'Shopee Filter by Shopee' }).click();
        await this.page.getByLabel('Cancel Current company filter').click();
        await this.page.getByLabel('Show all filters. Clicking').click();
        await this.page.getByRole('button', { name: 'Dismiss' }).click();
        await this.page.getByLabel('Reset applied filters').click();
        
    }
}
import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("Test Scenario - Positive", () => {
    test("As user, I can view my network page", async ({
        framePage, loginPage, networkPage
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await networkPage.mynetwork()
    });
    test("As user, I can view connections page", async ({
        framePage, loginPage, networkPage
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await networkPage.connections()
    });
});
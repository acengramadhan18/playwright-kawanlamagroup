import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("contoh - Positive", () => {
    test("As user i can login Kawan Lama Group Karir", async ({
        loginPage,logout
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await logout.logout()
    });
});
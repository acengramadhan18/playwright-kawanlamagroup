import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("Login - Negative", () => {
    test("As user i can't login Kawan Lama Group Karir without input email", async ({
        loginPage
    }) => {
        await loginPage.openWeb()
        await loginPage.logintanpaemail()
        // Evidence screenshot
        await loginPage.page.screenshot({
        path: `evidence/negative-no-email.png`,
        fullPage: true,
    });
    });
    test("As user i can't login Kawan Lama Group Karir without input password", async ({
        loginPage
    }) => {
        await loginPage.openWeb()
        await loginPage.logintanpapassword()
        // Evidence screenshot
        await loginPage.page.screenshot({
        path: `evidence/negative-no-password.png`,
        fullPage: true,
    });
    });
});

test.describe("Login - Positive", () => {
    test("As user i can login Kawan Lama Group Karir", async ({
        loginPage,logout
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        // Evidence screenshot setelah login
        await loginPage.page.screenshot({
        path: `evidence/positive-login-success.png`,
        fullPage: true,
    });
        await logout.logout()
    });
});
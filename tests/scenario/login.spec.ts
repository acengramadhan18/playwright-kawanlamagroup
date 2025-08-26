import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("Login - Negative", () => {
    test("As user i can't login Kawan Lama Group Karir without input email", async ({
        loginPage
    }) => {
        await loginPage.openWeb()
        await loginPage.logintanpaemail()
    });
    test("As user i can't login Kawan Lama Group Karir without input password", async ({
        loginPage
    }) => {
        await loginPage.openWeb()
        await loginPage.logintanpapassword()
    });
});

test.describe("Login - Positive", () => {
    test("As user i can login Kawan Lama Group Karir", async ({
        loginPage,logout
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await logout.logout()
    });
});
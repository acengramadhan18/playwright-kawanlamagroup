import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("contoh - Positive", () => {
    test("As user i can see Kelola Akun page on Kawan Lama Group Karir", async ({
        loginPage,kelolaAkunPage
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await kelolaAkunPage.kelolaakun()
    });
});
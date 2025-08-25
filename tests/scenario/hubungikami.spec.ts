import { beforeEach } from "node:test";
import { test } from "../pageobject/base.page"

test.describe("contoh - Positive", () => {
    test("As user i can see Budaya Kami page on Kawan Lama Group Karir", async ({
        loginPage,hubungiKamiPage
    }) => {
        await loginPage.openWeb()
        await loginPage.login()
        await hubungiKamiPage.hubungikami()
    });
});
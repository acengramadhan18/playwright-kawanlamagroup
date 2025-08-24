import { test as base } from '@playwright/test';
import { LoginPage } from './login.page';
import { NetworkPage } from './mynetwork.page';
import { Logout } from './logout';

type MyFixture = {
    loginPage : LoginPage;
    networkPage : NetworkPage;
    logout : Logout;
}

export const test = base.extend<MyFixture>({
    loginPage: async({ page }, use)=>{
        await use(new LoginPage(page))
    },
    networkPage: async({ page }, use)=>{
        await use(new NetworkPage(page))
    },
    logout: async({ page }, use)=>{
        await use(new Logout(page))
    }
})
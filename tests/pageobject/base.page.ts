import { test as base } from '@playwright/test';
import { LoginPage } from './login.page';
import { NetworkPage } from './mynetwork.page';
import { Logout } from './logout';
import { BudayaPage } from './budayakami.page';
import { KelolaAkunPage } from './kelolaakun.page';
import { HubungiKamiPage } from './hubungikami.page';

type MyFixture = {
    loginPage : LoginPage;
    networkPage : NetworkPage;
    logout : Logout;
    budayaPage : BudayaPage;
    kelolaAkunPage : KelolaAkunPage;
    hubungiKamiPage : HubungiKamiPage;
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
    },
    budayaPage: async({ page }, use)=>{
        await use(new BudayaPage(page))
    },
    kelolaAkunPage: async({ page }, use)=>{
        await use(new KelolaAkunPage(page))
    },
    hubungiKamiPage: async({ page }, use)=>{
        await use(new HubungiKamiPage(page))
    }
})
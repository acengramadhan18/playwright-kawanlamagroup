import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async openWeb(){
        await this.page.goto("https://karir.kawanlamagroup.com/");
        await expect(this.page.getByText(' Kawan Lama Group tidak memungut biaya apapun selama proses pendaftaran dan seleksi karir berlangsung.')).toBeVisible();

    }

    async login(){
        await this.page.setViewportSize({width:1920 , height:1080});
        await this.page.getByRole('link', { name: 'Masuk' }).click();
        await this.page.getByLabel('Email').fill('fikriramadhan180199@gmail.com');
        await this.page.getByLabel('Kata Sandi').fill('acengramadhan18');
        await this.page.getByRole('button', { name: 'Masuk' }).click();
        //Navbar
        await expect(this.page.getByRole('link', { name: 'Budaya Kami' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Acara' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Tahapan' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Lowongan Kerja' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Profil' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Lamaran Saya' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Kelola Akun' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Hubungi Kami' }).nth(0)).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Keluar' })).toBeVisible();
        await this.page.locator('a.lSPrev').click();
        await this.page.locator('a.lSNext').click();
        await expect(this.page.getByText('Nomor Lamaran')).toBeVisible();
        await expect(this.page.getByText('Tanggal Lamaran')).toBeVisible();
        await expect(this.page.getByText('Status Lamaran')).toBeVisible();
        await expect(this.page.getByText('Detail Pekerjaan')).toBeVisible();
        await expect(this.page.getByText('Nomor Lowongan')).toBeVisible();
        await expect(this.page.getByText('Pekerjaan', {exact:true})).toBeVisible();
        await expect(this.page.getByText('Kategori')).toBeVisible();
        await expect(this.page.getByText('Gambaran Pekerjaan')).toBeVisible();
        await expect(this.page.getByText('Kualifikasi')).toBeVisible();
        await expect(this.page.getByText('Skill yang dibutuhkan')).toBeVisible();
        //Footer
        await this.page.evaluate(() => {window.scrollTo(0, document.body.scrollHeight);});
        await expect(this.page.getByRole('link', { name: 'Tentang Kami' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Bisnis' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Kontribusi Sosial' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Ruang Berita' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Investor' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Hubungi Kami' }).nth(1)).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'FAQ' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Kebijakan Privasi' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: '@ceritaKLG' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Kawan Lama Group' }).nth(0)).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Kawan Lama Group' }).nth(1)).toBeVisible();
        await expect(this.page.getByText('© 2022 Kawan Lama Group', {exact:true})).toBeVisible();
    }
}
import { Locator, Page, expect } from "@playwright/test";

export class KelolaAkunPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async kelolaakun(){
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
        //Body
        await expect(this.page.getByText('Kelola Akun')).toBeVisible;
        await expect(this.page.getByText('Konfirmasi Akun')).toBeVisible;
        await expect(this.page.getByText('Alamat Email')).toBeVisible;
        await expect(this.page.getByText('FIKRIRAMADHAN180199@GMAIL.COM')).toBeVisible;
        await expect(this.page.getByText('Status Konfirmasi')).toBeVisible;
        await expect(this.page.getByText('Terkonfirmasi')).toBeVisible;
        await expect(this.page.getByText('Kata Sandi')).toBeVisible;
        // await this.page.getByRole('button', {name: 'Ubah Kata Sandi'}).click();
        // await expect(this.page.getByText('Ubah Kata Sandi')).toBeVisible;
        // await expect(this.page.getByText('Kata sandi lama')).toBeVisible;
        // await this.page.getByLabel('OldPassword').fill('acengramadhan18');
        // await this.page.getByLabel('OldPassword').clear();
        // await expect(this.page.getByText('Kata sandi baru')).toBeVisible;
        // await this.page.getByLabel('NewPassword').fill('testingaja123');
        // await this.page.getByLabel('NewPassword').clear();
        // await expect(this.page.getByRole('button', { name: 'Simpan' })).toBeVisible;
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
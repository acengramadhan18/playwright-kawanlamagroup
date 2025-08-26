import { Locator, Page, expect } from "@playwright/test";

export class HubungiKamiPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async hubungikami(){
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
        //body
        await this.page.getByRole('link', { name: 'Hubungi Kami' }).nth(0).click();
        await expect(this.page.getByRole('heading', { name: 'Hubungi Kami' })).toBeVisible();
        await expect(this.page.getByText('Gedung Kawan Lama Group Jl. Puri Kencana No 1 Meruya Utara - Kembangan Jakarta Barat 11610')).toBeVisible();
        await expect(this.page.getByText('No Telepon (021) 582 82 82')).toBeVisible();
        await expect(this.page.getByLabel('Nama Lengkap')).toBeVisible();
        await this.page.getByPlaceholder('Nama lengkap sesuai KTP').fill('Fikri Ramadhan');
        await this.page.getByPlaceholder('Nama lengkap sesuai KTP').clear();
        await expect(this.page.getByLabel('Email')).toBeVisible();
        await this.page.getByPlaceholder('Silakan gunakan alamat email yang digunakan untuk registrasi').fill('fikriramadhan180199@gmail.com');
        await this.page.getByPlaceholder('Silakan gunakan alamat email yang digunakan untuk registrasi').clear();
        await expect(this.page.getByLabel('Nomor Telepon')).toBeVisible();
        await this.page.getByPlaceholder('Pastikan whatsapp aktif').fill('081213428586');
        await this.page.getByPlaceholder('Pastikan whatsapp aktif').clear();
        await expect(this.page.getByLabel('Pesan')).toBeVisible();
        await this.page.getByPlaceholder('Silakan tulis pesan / pertanyaan untuk Talent Acquisition kami').fill('Testing Pesan aja');
        await this.page.getByPlaceholder('Silakan tulis pesan / pertanyaan untuk Talent Acquisition kami').clear();
        await expect(this.page.getByRole('button', { name: 'Kirim' })).toBeVisible();
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
    async alertfieldcheck(){
        await this.page.getByRole('link', { name: 'Hubungi Kami' }).nth(0).click();
        await this.page.getByPlaceholder('Nama lengkap sesuai KTP').fill('');
        await this.page.getByPlaceholder('Silakan gunakan alamat email yang digunakan untuk registrasi').fill('');
        await this.page.getByPlaceholder('Pastikan whatsapp aktif').fill('');
        await this.page.getByPlaceholder('Silakan tulis pesan / pertanyaan untuk Talent Acquisition kami').fill('');
        await this.page.getByRole('button', { name: 'Kirim' }).click();
        await expect(this.page.getByText('Nama Lengkap harus diisi')).toBeVisible();
        await expect(this.page.getByText('Email harus diisi')).toBeVisible();
        await expect(this.page.getByText('Nomor Telepon harus diisi')).toBeVisible();
        await expect(this.page.getByText('Pesan harus diisi')).toBeVisible();
    }
}
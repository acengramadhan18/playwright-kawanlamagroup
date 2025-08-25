import { Locator, Page, expect } from "@playwright/test";

export class BudayaPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async budaya(){
        await this.page.setViewportSize({width:1920 , height:1080});
        await expect(this.page.getByText('Jadilah Bagian dari Keluarga Besar Kawan Lama Group', {exact:true})).toBeVisible
        await expect(this.page.getByText('Sebagai identitas dari kelompok unit bisnis multisektor yang bergerak dalam enam pilar bisnis dengan pengalaman lebih dari 65 tahun, Kawan Lama Group memiliki berbagai peluang karir bagi Anda untuk bekerja di berbagai bidang dan industri.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Membawa Anda pada Kehidupan yang Lebih Baik', {exact:true})).toBeVisible
        await expect(this.page.getByText('Dengan semangat "Bring Value for a Better Life", kami hadir dan menjadi bagian dalam kehidupan setiap orang, serta membuatnya menjadi lebih baik.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Human Centric Sebagai Inti', {exact:true})).toBeVisible
        await expect(this.page.getByText('Untuk bertumbuh sebagai organisasi, perubahan terbesar yang harus dilakukan adalah mengubah paradigma model tradisional yang "memerintah dan mengontrol" menjadi “budaya kepemimpinan berhati nurani” yang berfokus pada tujuan, pola pikir yang bertumbuh, dan kesejahteraan karyawan. Secara keseluruhan, pengembangan organisasi kami selalu berpaku pada penanaman budaya perusahaan yang sehat, adaptif, dan tangguh agar selalu unggul di tengah industri yang selalu berubah, melalui kepemimpinan konstruktif dan sinergi antar karyawan.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Organisasi yang Terus Belajar', {exact:true})).toBeVisible
        await expect(this.page.getByText('Transformasi tanpa henti sangatlah penting untuk membuat kami bisa memimpin pasar dalam berbagai industri. Selain pengembangan personal sebagai hal utama untuk pertumbuhan organisasi, strategi perusahaan pun memegang peranan yang vital.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Nilai Perusahaan Kami', {exact:true})).toBeVisible
        await expect(this.page.getByText('Untuk menjawab tantangan perubahan zaman dan kompetisi bisnis serta mencapai visi dan misi, Kawan Lama Group menerapkan delapan nilai perusahaan (corporate values) yang berorientasi pada aspek manusia (human centric) dan biasa kami sebut sebagai “I AM ELITE”.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Innovative', {exact:true})).toBeVisible
        await expect(this.page.getByText('Memahami pentingnya memberikan nilai tambah untuk para pemangku kepentingan, memaksimalkan kekuatan ilmu pengetahuan dan sumber daya untuk mendorong potensi personal dan organisasi hingga maksimal.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Accountable', {exact:true})).toBeVisible
        await expect(this.page.getByText('Menghargai dan menanamkan rasa kepemilikan dan tanggung jawab, tidak takut akan kegagalan, serta memastikan semua pekerjaan dilakukan dengan penuh integritas dan konsistensi.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Mastery', {exact:true})).toBeVisible
        await expect(this.page.getByText('Meraih keseimbangan antara keahlian intrapersonal dan profesional, memiliki kemampuan untuk mengatasi batasan dan hambatan intrapersonal untuk menciptakan solusi terbaik sebagai hasil.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Excellence', {exact:true})).toBeVisible
        await expect(this.page.getByText('Memiliki motivasi untuk selalu unggul, namun bukan untuk “mengalahkan” orang lain, tetapi untuk mengejar pertumbuhan dan target yang lebih tinggi bagi diri sendiri dan orang lain.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Leadership', {exact:true})).toBeVisible
        await expect(this.page.getByText('Memimpin dengan memberikan contoh, serta memahami bahwa lebih dari otoritas dan otonomi, kepemimpinan adalah soal tanggung jawab yang dipikul.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Integrity', {exact:true})).toBeVisible
        await expect(this.page.getByText('Konsisten, komitmen, dan selaras antara kata dan perbuatan, berani untuk tidak berhenti pada apa yang “baik”, namun mendorong diri melakukan yang “benar” untuk keberlanjutan organisasi dan para pemangku kepentingan.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Teamwork', {exact:true})).toBeVisible
        await expect(this.page.getByText('Menempatkan pertumbuhan bersama di atas kepentingan pribadi, memiliki kesadaran bahwa keberhasilan hanya dapat dicapai saat saling melengkapi, memahami bahwa setiap posisi di perusahaan adalah sama pentingnya.', {exact:true})).toBeVisible
        await expect(this.page.getByText('Enthusiasm', {exact:true})).toBeVisible
        await expect(this.page.getByText('Bukan hanya sekadar rasa “senang” namun komitmen untuk tetap positif dan termotivasi walaupun terdapat tantangan — menghadapi segala hal dengan minat dan perhatian yang sama.', {exact:true})).toBeVisible
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
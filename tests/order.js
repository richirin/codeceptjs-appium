Feature('Order');

Scenario('Berhasil Order menggunakan Cash', async (I) => {
    await I.fillField('Masukkan Email / No Telepon Anda', 'qatest2312+1@gmail.com');
    await I.fillField('Masukan Password Anda', 'Test@123');
    await I.tap('MASUK');
    await I.see('Pilih Outlet');
    await I.tap('#android:id/text1');
    await I.tap('Outlet Update 01');
    await I.tap('SIMPAN');
    await I.waitForVisible('Home', 100)
    await I.tap('Test Ovo Gagal');
    await I.tap('SIMPAN')
    await I.tap('BAYAR')
    await I.tap('Ananan')
    await I.tap('SELANJUTNYA')
    await I.tap('BAYAR NANTI')
});

// Scenario('Gagal Login ketika memasukan email atau password yang salah', (I) => {
//     await I.fillField('Masukkan Email / No Telepon Anda', 'iniemailsalah');
//     await I.fillField('Masukan Password Anda', 'inipasswordsalah');
//     await I.tap('MASUK');
//     await I.see('Email atau Password Anda Salah')
// })

// Scenario('Gagal Login ketika tidak memasukan email dan Password', (I) => {
//     await I.tap('MASUK');
//     await I.seeElement('#spe.pos.rewash:id/iv_login_email_error')
//     await I.seeElement('#spe.pos.rewash:id/iv_login_pass_error')
// })

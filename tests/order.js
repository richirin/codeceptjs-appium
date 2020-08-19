Feature('Order');

let total;
let bayar;
let kembalian;

// Scenario('Transaksi terbuat saat klik bayar nanti di checkout page', async (I) => {
//     await I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
//     await I.fillField('Masukan Password Anda', process.env.PASSWORD);
//     await I.tap('MASUK');
//     await I.see('Pilih Outlet');
//     await I.tap('#android:id/text1');
//     await I.tap(process.env.OUTLET);
//     await I.tap('SIMPAN');
//     await I.waitForVisible('Home', 100)
//     await I.tap('Automation Kemeja');
//     await I.tap('SIMPAN')
//     await I.tap('BAYAR')
//     await I.tap(process.env.PELANGGAN)
//     await I.tap('SELANJUTNYA')
//     await I.tap('BAYAR NANTI')
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     await I.see(`${h + ':' + m}`)
//     await I.tap('Riwayat')
//     await I.see(`${h + ':' + m}`)
// });

Scenario('Transaksi Menggunakan Cash', async (I) => {
    await I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
    await I.fillField('Masukan Password Anda', process.env.PASSWORD);
    await I.tap('MASUK');
    await I.see('Pilih Outlet');
    await I.tap('#android:id/text1');
    await I.tap(process.env.OUTLET);
    await I.tap('SIMPAN');
    await I.waitForVisible('Home', 100)
    await I.tap('Automation Kemeja');
    await I.tap('SIMPAN')
    await I.tap('BAYAR')
    await I.tap(process.env.PELANGGAN)
    await I.tap('SELANJUTNYA')
    await I.see('Pilih Metode Pembayaran')
    await I.see('Pembayaran Digital')
    total = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal')
    await I.tap('CASH')
    await I.tap('10k')
    bayar = parseInt(await I.grabTextFrom('#spe.pos.rewash:id/number_display').join(""))
    await I.tap('SIMPAN')
    await I.tap('KONFIRMASI')
    kembalian = await I.grabTextFrom('#spe.pos.rewash:id/tvKembalian')
    console.log(total, bayar, kembalian)
});

// Scenario('Gagal Login ketika memasukan email atau password yang salah', async (I) => {
//     await I.fillField('Masukkan Email / No Telepon Anda', 'iniemailsalah');
//     await I.fillField('Masukan Password Anda', 'inipasswordsalah');
//     await I.tap('MASUK');
//     await I.see('Email atau Password Anda Salah')
// })

// Scenario('Gagal Login ketika tidak memasukan email dan Password', async (I) => {
//     await I.tap('MASUK');
//     await I.seeElement('#spe.pos.rewash:id/iv_login_email_error')
//     await I.seeElement('#spe.pos.rewash:id/iv_login_pass_error')
// })

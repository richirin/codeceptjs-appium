const assert = require('chai').expect;

Feature('Order');

let total;
let bayar;
let kembalian;
let patt = /[(0-9)]/g;

// Scenario(
//   'Transaksi terbuat saat klik bayar nanti di checkout page',
//   async I => {
//     // Login
//     I.login(process.env.EMAIL, process.env.PASSWORD);
//     // Pilih Outlet
//     I.pilihOutlet(process.env.OUTLET);
//     // Menunggu sampai element home tampil
//     I.waitForVisible('Home', 100);
//     // Pilih di Produk
//     I.pilihProduk(process.env.PRODUK);
//     // Pilih Pelanggan
//     I.tap(process.env.PELANGGAN);
//     I.tap('SELANJUTNYA');
//     // Klik Bayar Nanti
//     I.tap('BAYAR NANTI');
//     // Code untuk mendapatkan date hari ini(Jam dan menit xx:xx)
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     I.see(`${h + ':' + m}`);
//     I.tap('Riwayat');
//     // transaksi ter-create di menu Riwayat
//     I.see(`${h + ':' + m}`);
//   },
// );

// Scenario('Transaksi Menggunakan Cash', async I => {
//   // Login
//   I.login(process.env.EMAIL, process.env.PASSWORD);
//   // Pilih Outlet
//   I.pilihOutlet(process.env.OUTLET);
//   // Menunggu sampai tampil element home
//   I.waitForVisible('Home', 100);
//   // Pilih Produk
//   I.tap('Automation Kemeja');
//   I.tap('SIMPAN');
//   // Klik Bayar
//   I.tap('BAYAR');
//   // Pilih Pelanggan
//   I.tap(process.env.PELANGGAN);
//   I.tap('SELANJUTNYA');
//   // Pilih Metode Pembayaran
//   I.see('Pilih Metode Pembayaran');
//   I.see('Pembayaran Digital');
//   // Get text total
//   element = I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal');
//   total = parseInt(element.match(patt).join(''));
//   I.tap('CASH');
//   I.tap('10k');
//   // Get Text kalkulator
//   element = I.grabTextFrom('#spe.pos.rewash:id/number_display');
//   bayar = parseInt(element.match(patt).join(''));
//   I.tap('SIMPAN');
//   // Get Text uang yang diinput di kalkulator
//   element = I.grabTextFrom('#spe.pos.rewash:id/tv_payment_uang_bayar');
//   uangDibayar = parseInt(element.match(patt).join(''));
//   // Get Text Uang Kembali di ringkasan produk
//   element = I.grabTextFrom('#spe.pos.rewash:id/tv_payment_uang_kembali');
//   uangKembali = parseInt(element.match(patt).join(''));
//   I.tap('KONFIRMASI');
//   // Code untuk mendapatkan date hari ini(Jam dan menit xx:xx)
//   var date = new Date();
//   var h = date.getHours();
//   var m = date.getMinutes();
//   h = h < 10 ? '0' + h : h;
//   m = m < 10 ? '0' + m : m;
//   I.see(`${h + ':' + m}`);
//   // Get Text Uang Kembali setelah melakukan pembayaran
//   element = I.grabTextFrom('#spe.pos.rewash:id/tvKembalian');
//   kembalian = parseInt(element.match(patt).join(''));
//   assert(uangDibayar - total).equal(uangKembali);
//   assert(bayar - total).equal(kembalian);
//   // Klik Selesai
//   I.tap('SELESAI');
//   // transaksi tampil di menu list
//   I.see(`${h + ':' + m}`);
//   I.tap('SELESAI');
//   // transaksi tampil di menu list
//   I.see(`${h + ':' + m}`);
// });

// Scenario('Transaksi Menggunakan OVO', async I => {
//   I.login(process.env.EMAIL, process.env.PASSWORD);
//   I.pilihOutlet(process.env.OUTLET);
//   I.waitForVisible('Home', 100);
//   I.tap('Automation Kemeja');
//   I.tap('SIMPAN');
//   I.tap('BAYAR');
//   I.tap(process.env.PELANGGAN);
//   I.tap('SELANJUTNYA');
//   I.see('Pilih Metode Pembayaran');
//   I.see('Pembayaran Digital');
//   total = I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal')
//     .match(patt)
//     .join('');
//   bayar = I.grabTextFrom('#spe.pos.rewash:id/number_display')
//     .match(patt)
//     .join('');
//   I.tap('SIMPAN');
//   I.tap('KONFIRMASI');
//   console.log(total, bayar, kembalian);
// });

// Scenario('Transaksi Menggunakan LinkAja', async (I) => {
//    I.login(process.env.EMAIL, process.env.PASSWORD);
//    I.pilihOutlet(process.env.OUTLET);
//    I.waitForVisible('Home', 100);
//    I.tap('Automation Kemeja');
//    I.tap('SIMPAN');
//    I.tap('BAYAR');
//    I.tap(process.env.PELANGGAN);
//    I.tap('SELANJUTNYA');
//    I.see('Pilih Metode Pembayaran');
//    I.see('Pembayaran Digital');
//   total =  I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal')
//     .match(patt)
//     .join('');
//    I.tap('CASH');
//    I.tap('10k');
//   bayar =  I.grabTextFrom('#spe.pos.rewash:id/number_display')
//     .match(patt)
//     .join('');
//    I.tap('SIMPAN');
//    I.tap('KONFIRMASI');
//   kembalian =  I.grabTextFrom('#spe.pos.rewash:id/tvKembalian')
//     .match(patt)
//     .join('');
//   console.log(total, bayar, kembalian);
// });

// Scenario('Gagal Login ketika memasukan email atau password yang salah', async (I) => {
//      I.fillField('Masukkan Email / No Telepon Anda', 'iniemailsalah');
//      I.fillField('Masukan Password Anda', 'inipasswordsalah');
//      I.tap('MASUK');
//      I.see('Email atau Password Anda Salah')
// })

// Scenario('Gagal Login ketika tidak memasukan email dan Password', async (I) => {
//      I.tap('MASUK');
//      I.seeElement('#spe.pos.rewash:id/iv_login_email_error')
//      I.seeElement('#spe.pos.rewash:id/iv_login_pass_error')
// })

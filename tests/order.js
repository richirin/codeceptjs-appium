const assert = require('chai').expect;

Feature('Order');

let total;
let bayar;
let kembalian;
let patt = /[(0-9)]/g;

Scenario(
  'Transaksi terbuat saat klik bayar nanti di checkout page',
  async I => {
    // Login
    await I.login(process.env.EMAIL, process.env.PASSWORD);
    // Pilih Outlet
    await I.pilihOutlet(process.env.OUTLET);
    // Menunggu sampai element home tampil
    await I.waitForVisible('Home', 100);
    // Pilih di Produk
    await I.pilihProduk(process.env.PRODUK1);
    // Pilih Pelanggan
    await I.tap(process.env.PELANGGAN);
    await I.tap('SELANJUTNYA');
    // Klik Bayar Nanti
    await I.tap('BAYAR NANTI');
    // Code untuk mendapatkan date hari ini(Jam dan menit xx:xx)
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    await I.see(`${h}`);
    await I.tap('Riwayat');
    // transaksi ter-create di menu Riwayat
    await I.see(`${h}`);
  },
);

Scenario('Transaksi Menggunakan Cash', async I => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Menunggu sampai tampil element home
  await I.waitForVisible('Home', 100);
  // Pilih Produk
  await I.tap(process.env.PRODUK1);
  await I.tap('SIMPAN');
  // Klik Bayar
  await I.tap('BAYAR');
  // Pilih Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.tap('SELANJUTNYA');
  // Pilih Metode Pembayaran
  await I.see('Pilih Metode Pembayaran');
  await I.see('Pembayaran Digital');
  // Get text total
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal');
  total = parseInt(element.match(patt).join(''));
  await I.tap('CASH');
  await I.tap('10k');
  // Get Text kalkulator
  element = await I.grabTextFrom('#spe.pos.rewash:id/number_display');
  bayar = parseInt(element.match(patt).join(''));
  await I.tap('SIMPAN');
  // Get Text uang yang diinput di kalkulator
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_uang_bayar');
  uangDibayar = parseInt(element.match(patt).join(''));
  // Get Text Uang Kembali di ringkasan produk
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_uang_kembali');
  uangKembali = parseInt(element.match(patt).join(''));
  await I.tap('KONFIRMASI');
  // Code untuk mendapatkan date hari ini(Jam dan menit xx:xx)
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  await I.see(`${h}`);
  // Get Text Uang Kembali setelah melakukan pembayaran
  element = await I.grabTextFrom('#spe.pos.rewash:id/tvKembalian');
  kembalian = parseInt(element.match(patt).join(''));
  assert(uangDibayar - total).equal(uangKembali);
  assert(bayar - total).equal(kembalian);
  // Klik Selesai
  await I.tap('SELESAI');
  // transaksi tampil di menu Riwayat
  await I.tap('Riwayat');
  await I.see(`${h}`);
});

Scenario('Transaksi Menggunakan OVO', async I => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Menunggu sampai tampil element home
  await I.waitForVisible('Home', 100);
  // Pilih Produk
  await I.tap(process.env.PRODUK1);
  await I.tap('SIMPAN');
  // Klik Bayar
  await I.tap('BAYAR');
  // Pilih Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.tap('SELANJUTNYA');
  // Pilih Metode Pembayaran
  await I.see('Pilih Metode Pembayaran');
  await I.see('Pembayaran Digital');
  // Get text total
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal');
  total = parseInt(element.match(patt).join(''));
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 1412, // x offset
        y: 650, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  // verify total harga
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_e_payment_total');
  bayar = parseInt(element.match(patt).join(''));
  assert(total).to.equal(bayar);
  // Verify nomor telepon
  await I.see('Masukan Nomor Telepon');
  // tap konfirmasi
  await I.tap('KONFIRMASI');
  // verify modal pop up
  await I.dontSee('Masukan Nomor Telepon');
  // klik konfirmasi
  await I.tap('KONFIRMASI');
  await I.waitForElement(
    '#spe.pos.rewash:id/tv_payment_dialog_success_method',
    50,
  );
  await I.tap('SELESAI');
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  await I.see(h);
  // transaksi tampil di menu Riwayat
  await I.tap('Riwayat');
  await I.see(h);
});

// Scenario('Transaksi Menggunakan LinkAja', async (I) => {
//    await I.login(process.env.EMAIL, process.env.PASSWORD);
//    await I.pilihOutlet(process.env.OUTLET);
//    await I.waitForVisible('Home', 100);
//    await I.tap('Automation Kemeja');
//    await I.tap('SIMPAN');
//    await I.tap('BAYAR');
//    await I.tap(process.env.PELANGGAN);
//    await I.tap('SELANJUTNYA');
//    await I.see('Pilih Metode Pembayaran');
//    await I.see('Pembayaran Digital');
//   total =  await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_subtotal')
//     .match(patt)
//     .join('');
//    await I.tap('CASH');
//    await I.tap('10k');
//   bayar =  await I.grabTextFrom('#spe.pos.rewash:id/number_display')
//     .match(patt)
//     .join('');
//    await I.tap('SIMPAN');
//    await I.tap('KONFIRMASI');
//   kembalian =  await I.grabTextFrom('#spe.pos.rewash:id/tvKembalian')
//     .match(patt)
//     .join('');
//   console.log(total, bayar, kembalian);
// });

// Scenario('Gagal Login ketika memasukan email atau password yang salah', async (I) => {
//      await I.fillField('Masukkan Email / No Telepon Anda', 'iniemailsalah');
//      await I.fillField('Masukan Password Anda', 'inipasswordsalah');
//      await I.tap('MASUK');
//      await I.see('Email atau Password Anda Salah')
// })

// Scenario('Gagal Login ketika tidak memasukan email dan Password', async (I) => {
//      await I.tap('MASUK');
//      await I.seeElement('#spe.pos.rewash:id/iv_login_email_error')
//      await I.seeElement('#spe.pos.rewash:id/iv_login_pass_error')
// })

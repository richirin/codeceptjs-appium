const assert = require('chai').expect;
const {payLinkAja} = require('./api/linkaja-pay-page');

let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
h = h < 10 ? '0' + h : h;
m = m < 10 ? '0' + m : m;

Feature('PEMBAYARAN MELALUI ICON CART');

let total;
let bayar;
let kembalian;
let patt = /[(0-9)]/g;
let linkAja;
let response;

Scenario('Bayar nanti menggunakan Cash', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Menunggu sampai element home tampil
  await I.waitForVisible('Home', 50);
  // Pilih di Produk
  await I.pilihProduk(process.env.PRODUK1);
  // Pilih Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.tap('SELANJUTNYA');
  // Klik Bayar Nanti
  await I.tap('BAYAR NANTI');
  // Verify Element
  await I.waitForVisible('List', 50);
  // tap icon cart
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 1628, // x offset
        y: 103, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  await I.tap('BAYAR');
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
  // verify transaksi tampil di menu list
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

Scenario('Bayar nanti menggunakan OVO', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Menunggu sampai element home tampil
  await I.waitForVisible('Home', 50);
  // Pilih di Produk
  await I.pilihProduk(process.env.PRODUK1);
  // Pilih Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.tap('SELANJUTNYA');
  // Klik Bayar Nanti
  await I.tap('BAYAR NANTI');
  // Verify Element
  await I.waitForVisible('List', 50);
  // tap icon cart
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 1628, // x offset
        y: 103, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  await I.tap('BAYAR');
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
  await I.waitForVisible(
    '#spe.pos.rewash:id/tv_payment_dialog_success_method',
    50,
  );
  // Verify payment method menggunakan OVO
  text = await I.grabTextFrom(
    '#spe.pos.rewash:id/tv_payment_dialog_success_method',
  );
  assert(text).to.contains('OVO');
  await I.tap('SELESAI');
  // transaksi tampil di menu Riwayat
  await I.waitForVisible('Riwayat');
  await I.tap('Riwayat');
  await I.see(h);
});

Scenario('Bayar nanti menggunakan LinkAja', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Menunggu sampai element home tampil
  await I.waitForVisible('Home', 50);
  // Pilih di Produk
  await I.pilihProduk(process.env.PRODUK1);
  // Pilih Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.tap('SELANJUTNYA');
  // Klik Bayar Nanti
  await I.tap('BAYAR NANTI');
  // Verify Element
  await I.waitForVisible('List', 50);
  // tap icon cart
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 1628, // x offset
        y: 103, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  await I.tap('BAYAR');
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
        x: 1172, // x offset
        y: 653, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  // tap Konfirmasi
  await I.tap('KONFIRMASI');
  // verify total harga
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_payment_amount_link');
  bayar = parseInt(element.substr(0, 15).match(patt).join(''));
  assert(total).to.equal(bayar);
  // Hit endpoint
  linkAja = parseInt(element.substr(-4).match(patt).join(''));
  response = await payLinkAja(linkAja);
  assert(response.status).to.equal(200);
  // verify element
  await I.waitForVisible(
    '#spe.pos.rewash:id/tv_payment_dialog_success_method',
    50,
  );
  // Verify kalau payment method menggunakan LinkAja
  text = await I.grabTextFrom(
    '#spe.pos.rewash:id/tv_payment_dialog_success_method',
  );
  assert(text).to.contains('LinkAja');
  await I.tap('SELESAI');
  // transaksi tampil di menu Riwayat
  await I.waitForVisible('Riwayat', 50);
  await I.tap('Riwayat');
  await I.see(h);
});

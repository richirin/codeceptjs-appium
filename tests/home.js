const assert = require('chai').expect;

Feature('Home Screen');

let text;
let expected;
let quantity;
let parsed;
let element;
let patt = /[(0-9)]/g;

Scenario('Verify Produk', async ({ I }) => {
  // login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // pilih outlet
  await I.pilihOutlet(process.env.OUTLET);
  // verify produk
  await I.see(process.env.PRODUK1);
  await I.see(process.env.PRODUK2);
  // tap kategori pelengkap
  await I.tap('Pelengkap');
  // verify produk
  await I.dontSee(process.env.PRODUK1);
  //  tap kategori pakaian
  await I.tap('Pakaian');
  // verify produk
  await I.dontSee(process.env.PRODUK2);
});

Scenario('Tambah produk tanpa Add-On', async ({ I }) => {
  // login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // pilih outlet
  await I.pilihOutlet(process.env.OUTLET);
  // tap prouk
  await I.tap(process.env.PRODUK1);
  // tambah quantity produk
  await I.tap('#spe.pos.rewash:id/increment');
  await I.tap('#spe.pos.rewash:id/increment');
  // kurangi quantity produk
  await I.tap('#spe.pos.rewash:id/decrement');
  // get element
  quantity = await I.grabTextFrom('#spe.pos.rewash:id/display');
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_spinner_right');
  text = parseInt(element.match(patt).join(''));
  // tap simpan
  await I.tap('SIMPAN');
  // verify outlet
  await I.see(process.env.OUTLET);
  // verify total harga
  element = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_order_amount');
  expected = parseInt(element.match(patt).join(''));
  assert(text * quantity).to.equal(expected);
  // verify quantity
  expected = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_amount_summary');
  assert(quantity).to.equal(expected);
  text = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_order_name');
  assert(text).to.equal(process.env.PRODUK1);
});

// belum coba running
Scenario.skip('Delete Produk dari keranjang', async ({ I }) => {
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  await I.pilihOutlet(process.env.OUTLET);
  await I.tap(process.env.PRODUK1);
  await I.tap('SIMPAN');
  await I.see(process.env.OUTLET);
  await I.tap('#spe.pos.rewash:id/btn_home_delete');
  await I.tap('KONFIRMASI');
  await I.dontSee('#spe.pos.rewash:id/tv_item_order_name');
});

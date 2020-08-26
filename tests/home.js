const assert = require('chai').expect;

Feature('Home Screen');

let text;
let expected;
let quantity;

// Scenario('Verify Produk', async I => {
//  await I.login(process.env.EMAIL, process.env.PASSWORD);
//  await I.pilihOutlet(process.env.OUTLET);
//  await I.see(process.env.PRODUK1);
//  await I.see(process.env.PRODUK2);
//  await I.tap('Pelengkap');
//  await I.dontSee(process.env.PRODUK1);
//  await I.tap('Pakaian');
//  await I.dontSee(process.env.PRODUK2);
// });

// Scenario('Tambah produk tanpa Add-On', async I => {
//   await I.login(process.env.EMAIL, process.env.PASSWORD);
//   await I.pilihOutlet(process.env.OUTLET);
//   await I.tap(process.env.PRODUK1);
//   await I.tap('#spe.pos.rewash:id/increment');
//   await I.tap('#spe.pos.rewash:id/increment');
//   await I.tap('#spe.pos.rewash:id/decrement');
//   quantity = await I.grabTextFrom('#spe.pos.rewash:id/display');
//   text = await I.grabTextFrom('#spe.pos.rewash:id/tv_spinner_right');
//   await I.tap('SIMPAN');
//   await I.see(process.env.OUTLET);
//   expected = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_order_amount');
//   assert(text).to.equal(expected);
//   expected = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_amount_summary');
//   assert(quantity).to.equal(expected);
//   text = await I.grabTextFrom('#spe.pos.rewash:id/tv_item_order_name');
//   assert(text).to.equal(process.env.PRODUK1);
// });

// belum coba running
// Scenario('Delete Produk dari keranjang', async I => {
//   await I.login(process.env.EMAIL, process.env.PASSWORD);
//   await I.pilihOutlet(process.env.OUTLET);
//   await I.tap(process.env.PRODUK1);
//   await I.tap('SIMPAN');
//   await I.see(process.env.OUTLET);
//   await I.tap('#spe.pos.rewash:id/btn_home_delete');
//   await I.tap('KONFIRMASI');
//   await I.dontSee('#spe.pos.rewash:id/tv_item_order_name');
// });


const assert = require('chai').expect;

Feature('Pilih Outlet');

Scenario('Pilih Outlet', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.see('Pilih Outlet');
  await I.tap('#android:id/text1');
  await I.tap(process.env.OUTLET);
  await I.tap('SIMPAN');
  await I.see('Semua Produk');
  await I.see(process.env.OUTLET);
});

Feature('Login');

Scenario('Berhasil Login', async I => {
  // await I.saveScreenshot("Codecept_IO_Screenshot_Image.png");
  // await I.seeVisualDiff("Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
  await I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
  await I.fillField('Masukan Password Anda', process.env.PASSWORD);
  await I.tap('MASUK');
  await I.see('Pilih Outlet');
});

// Scenario("Gagal Login ketika memasukan email atau password yang salah", (I) => {
//   await I.fillField("Masukkan Email / No Telepon Anda", "iniemailsalah");
//   await I.fillField("Masukan Password Anda", "inipasswordsalah");
//   await I.tap("MASUK");
//   await I.see("Email atau Password Anda Salah");
// });

// Scenario("Gagal Login ketika tidak memasukan email dan Password", (I) => {
//   await I.tap("MASUK");
//   await I.seeElement("#spe.pos.rewash:id/iv_login_email_error");
//   await I.seeElement("#spe.pos.rewash:id/iv_login_pass_error");
// });

Feature('Login');

Scenario('Berhasil Login', (I) => {
    // I.saveScreenshot("Codecept_IO_Screenshot_Image.png");
    // I.seeVisualDiff("Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
    I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
    I.fillField('Masukan Password Anda', process.env.PASSWORD);
    I.tap('MASUK');
    I.see('Pilih Outlet')
  });

Scenario('Gagal Login ketika memasukan email atau password yang salah', (I) => {
    I.fillField('Masukkan Email / No Telepon Anda', 'iniemailsalah');
    I.fillField('Masukan Password Anda', 'inipasswordsalah');
    I.tap('MASUK');
    I.see('Email atau Password Anda Salah')
})

Scenario('Gagal Login ketika tidak memasukan email dan Password', (I) => {
    I.tap('MASUK');
    I.seeElement('#spe.pos.rewash:id/iv_login_email_error')
    I.seeElement('#spe.pos.rewash:id/iv_login_pass_error')
})

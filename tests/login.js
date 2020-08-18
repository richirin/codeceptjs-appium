Feature('Login');

Scenario('Berhasil Login', (I) => {
    I.fillField('Masukkan Email / No Telepon Anda', 'testerqa2312+16@gmail.com');
    I.fillField('Masukan Password Anda', 'Test@123');
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

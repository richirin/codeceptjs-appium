Feature('Forgot Password');

Scenario('Request Forgot Password', I => {
  I.tap('Lupa Password');
  I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
  I.tap('SELANJUTNYA');
  I.see('Permintaan Password sukses dikirim ke email anda.');
});

Scenario(
  'gagal Request Forgot Password dengan email yang belum terdaftar',
  I => {
    I.tap('Lupa Password');
    I.fillField('Masukkan Email / No Telepon Anda', process.env.INVALIDEMAIL);
    I.tap('SELANJUTNYA');
    I.see('Email Belum Terdaftar');
  },
);

Scenario('gagal Request Forgot Password dengan format email yang salah', I => {
  I.tap('Lupa Password');
  I.fillField('Masukkan Email / No Telepon Anda', '123');
  I.tap('SELANJUTNYA');
  I.see('The email must be a valid email address');
});

Scenario('gagal Request Forgot Password tanpa mengisi kolom email', I => {
  I.tap('Lupa Password');
  I.tap('SELANJUTNYA');
  I.see('Kolom email harus diisi');
});

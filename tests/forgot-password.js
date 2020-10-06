Feature('Forgot Password');

Scenario('Request Forgot Password', async ({I}) => {
  await I.tap('Lupa Password');
  await I.fillField('Masukkan Email / No Telepon Anda', process.env.EMAIL);
  await I.tap('SELANJUTNYA');
  await I.see('Permintaan Password sukses dikirim ke email anda.');
});

Scenario(
  'gagal Request Forgot Password dengan email yang belum terdaftar',
  async ({I}) => {
    await I.tap('Lupa Password');
    await I.fillField(
      'Masukkan Email / No Telepon Anda',
      process.env.INVALIDEMAIL,
    );
    await I.tap('SELANJUTNYA');
    await I.see('Email Belum Terdaftar');
  },
);

Scenario(
  'gagal Request Forgot Password dengan format email yang salah',
  async ({I}) => {
    await I.tap('Lupa Password');
    await I.fillField('Masukkan Email / No Telepon Anda', '123');
    await I.tap('SELANJUTNYA');
    await I.see('The email must be a valid email address');
  },
);

Scenario(
  'gagal Request Forgot Password tanpa mengisi kolom email',
  async ({I}) => {
    await I.tap('Lupa Password');
    await I.tap('SELANJUTNYA');
    await I.see('Kolom email harus diisi');
  },
);

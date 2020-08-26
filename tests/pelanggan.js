const faker = require('faker');

Feature('Pelanggan');

const name = faker.name.findName();
const phone = faker.phone.phoneNumber('08##########');
const email = faker.internet.email();

Scenario('Tambah Pelanggan', async I => {
  I.login(process.env.EMAIL, process.env.PASSWORD);
  I.pilihOutlet(process.env.OUTLET);
  I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  I.tap('Manajemen Pelanggan');
  I.tap(' Tambah Pelanggan');
  I.tap('While using the app');
  I.fillField('#spe.pos.rewash:id/et_cs_name', name);
  I.fillField('#spe.pos.rewash:id/et_cs_telepon', phone);
  I.fillField('#spe.pos.rewash:id/et_cs_email', email);
  I.tap('SIMPAN');
  I.see(name);
});

Scenario('Search Pelanggan', async I => {
  I.login(process.env.EMAIL, process.env.PASSWORD);
  I.pilihOutlet(process.env.OUTLET);
  I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  I.tap('Manajemen Pelanggan');
  I.tap(name);
  I.tap('#spe.pos.rewash:id/search_src_text');
  I.fillField('#spe.pos.rewash:id/search_src_text', phone);
  I.pressKey('Enter');
  I.see(name);
  I.dontSee(process.env.PELANGGAN);
});

Scenario('Hapus Pelanggan', async I => {
  I.login(process.env.EMAIL, process.env.PASSWORD);
  I.pilihOutlet(process.env.OUTLET);
  I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  I.tap('Manajemen Pelanggan');
  I.tap(name);
  I.tap('Edit Profil');
  I.tap('#spe.pos.rewash:id/iv_add_customer_delete');
  I.tap('HAPUS');
  I.fillField('#spe.pos.rewash:id/search_src_text', phone);
  I.pressKey('Enter');
  I.dontSee(name);
});

// Scenario(
//   'gagal Request Forgot Password dengan email yang belum terdaftar',
//   async I => {
//     await I.tap('Lupa Password');
//     await I.fillField(
//       'Masukkan Email / No Telepon Anda',
//       process.env.INVALIDEMAIL,
//     );
//     await I.tap('SELANJUTNYA');
//     await I.see('Email Belum Terdaftar');
//   },
// );

// Scenario(
//   'gagal Request Forgot Password dengan format email yang salah',
//   async I => {
//     await I.tap('Lupa Password');
//     await I.fillField('Masukkan Email / No Telepon Anda', '123');
//     await I.tap('SELANJUTNYA');
//     await I.see('The email must be a valid email address');
//   },
// );

// Scenario('gagal Request Forgot Password tanpa mengisi kolom email', async I => {
//   await I.tap('Lupa Password');
//   await I.tap('SELANJUTNYA');
//   await I.see('Kolom email harus diisi');
// });

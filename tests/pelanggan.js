const faker = require('faker');

// notes search pelanggan belum

Feature('Pelanggan');

const name = faker.name.findName();
const phone = faker.phone.phoneNumber('08##########');
const email = faker.internet.email();

Scenario('Tambah Pelanggan', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Klik Burger Menu
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  // klik Manajemen Pelanggan
  await I.tap('Manajemen Pelanggan');
  // Tambah Pelanggan
  await I.tap(' Tambah Pelanggan');
  await I.tap('While using the app');
  await I.fillField('#spe.pos.rewash:id/et_cs_name', name);
  await I.fillField('#spe.pos.rewash:id/et_cs_telepon', phone);
  await I.fillField('#spe.pos.rewash:id/et_cs_email', email);
  await I.tap('SIMPAN');
  // Verify Pelanggan
  await I.see(name);
});

Scenario('Edit Profile Pelanggan', async ({ I }) => {
  let updateName = faker.name.findName();
  let updatePhone = faker.phone.phoneNumber('08##########');
  let updateEmail = faker.internet.email();
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Klik Burger Menu
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  // Klik Manajemen Pelanggan
  await I.tap('Manajemen Pelanggan');
  // Edit Profil
  await I.tap(name);
  await I.tap('Edit Profil');
  await I.fillField('#spe.pos.rewash:id/et_cs_name', updateName);
  await I.fillField('#spe.pos.rewash:id/et_cs_telepon', updatePhone);
  await I.fillField('#spe.pos.rewash:id/et_cs_email', updateEmail);
  await I.tap('SIMPAN');
  // Verify Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.see(updateName);
  // Verify data pelanggan
  await I.tap(updateName);
  await I.see(updatePhone);
  await I.see(updateEmail);
  // Edit Profil ke semula
  await I.tap('Edit Profil');
  await I.fillField('#spe.pos.rewash:id/et_cs_name', name);
  await I.fillField('#spe.pos.rewash:id/et_cs_telepon', phone);
  await I.fillField('#spe.pos.rewash:id/et_cs_email', email);
  await I.tap('SIMPAN');
  // Verify Pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.see(name);
});

Scenario('Hapus Pelanggan', async ({ I }) => {
  // Login
  await I.login(process.env.EMAIL, process.env.PASSWORD);
  // Pilih Outlet
  await I.pilihOutlet(process.env.OUTLET);
  // Klik Burger Menu
  await I.touchPerform([
    {
      action: 'tap',
      options: {
        x: 60, // x offset
        y: 97, // y offset
        count: 1, // number of touches
      },
    },
  ]);
  // Klik Manajemen Pelanggan
  await I.tap('Manajemen Pelanggan');
  // Hapus data pelanggan
  await I.tap(name);
  await I.tap('Edit Profil');
  await I.tap('#spe.pos.rewash:id/iv_add_customer_delete');
  await I.tap('HAPUS');
  // Verify data pelanggan
  await I.tap(process.env.PELANGGAN);
  await I.dontSee(name);
});

// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    login: function (email, password) {
      this.fillField("Masukkan Email / No Telepon Anda", email);
      this.fillField("Masukan Password Anda", password);
      this.tap("MASUK");
      this.see("Pilih Outlet");
    },

    pilihOutlet: function (outlet) {
      this.tap("#android:id/text1");
      this.tap(outlet);
      this.tap("SIMPAN");
    },
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
  });
};

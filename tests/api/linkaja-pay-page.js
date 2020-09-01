const supertest = require('supertest');
require('dotenv');

const api = supertest(process.env.LINKAJA_URL);

const payLinkAja = linkAja =>
  api
    .post(`/qr_codes/PAY-LINKAJA-${linkAja}/payments/simulate/`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .auth(
      'xnd_development_BYXig7jTjFCQUQMcGfbVaHK16MXzlXEV3YPq2o7IXNeULvJ7LqLMdbgk7IbN',
      '',
    );

module.exports = {
  payLinkAja,
};

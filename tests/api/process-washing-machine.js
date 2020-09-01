const supertest = require('supertest');
require('dotenv');

const api = supertest(process.env.POS_REWASH_URL);

const washingMachine = id => api.get(`/flagraspimacod/${id}`);

module.exports = {
  washingMachine,
};

require("dotenv").config();

const PROM_DATA_URL = process.env.PROM_DATA_URL;

module.exports = { PROM_DATA_URL };

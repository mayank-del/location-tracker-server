const mongoose = require("mongoose");

const LocnSchema = new mongoose.Schema({
  address_line1: {
    type: String,
  },
  address_line2: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  network: {
    type: String,
  },
  org: {
    type: String,
  },
  ip: {
    type: String,
  },
  postal: {
    type: String,
  },
  region: {
    type: String,
  },
});
Locn = mongoose.model("Locn", LocnSchema);
module.exports = { Locn };

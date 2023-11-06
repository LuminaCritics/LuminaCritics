const bcryptjs = require("bcryptjs");

async function hash(password) {
  return await bcryptjs.hash(password, 14);
}

async function compare(providedPassword, storedPassword) {
  return await bcryptjs.compare(providedPassword, storedPassword);
}


module.exports = Object.freeze({
  hash,
  compare,
});

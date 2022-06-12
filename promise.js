const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let gabungan = ixx.concat(vgc);
  let hasilGabungan = 0;
  gabungan.map((ixx) => ixx.hasil === emosi && (hasilGabungan += 1));
  return hasilGabungan;
};

module.exports = {
  promiseOutput,
};

const bcryptjs = require('bcryptjs');

const hash = async (data) => {
  try {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(data, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
};

const compare = (data, hash) => bcryptjs.compare(data, hash);

const bcrypt = {
  hash,
  compare,
};


module.exports = bcrypt;

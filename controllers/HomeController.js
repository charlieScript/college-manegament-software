
const landing = async (req, res) => {
  res.render('landing')
}

const generalLogins = async (req, res) => {
  res.render('index');
};

const getError403 = async (req, res, next) => {
  res.render('error403');
};

const getError404 = async (req, res, next) => {
  res.render('error404');
};


module.exports = {
  landing,
  generalLogins,
  getError403,
  getError404,
};

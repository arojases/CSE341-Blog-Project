const validator = require('../helpers/validate.js');

const registerUser = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    password: 'required|string',
    email:'required|email'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateUser = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    password: 'required|string',
    email:'required|email'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  registerUser,
  updateUser
};
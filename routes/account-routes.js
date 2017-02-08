'use strict';
const models = require('../models');
const Payment = models.Payment;
const User = models.User;
const Account = models.Account;

let PaymentRoutes = {

  createAccount: function(req, res) {
    const newAccount = new Account(req.body);
    newAccount.save((err, account) => {
      if(err) throw err;

      res.json({message: 'Account Created', account});
    });
  },

  getAllAccounts: function(req, res) {
    Account.find({}, (err, accounts) => {
      if(err) throw err;

      res.json({data: accounts});
    });
  }

};

module.exports = PaymentRoutes;

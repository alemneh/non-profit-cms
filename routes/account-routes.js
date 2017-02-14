'use strict';
const models = require('../models');
const Transaction = models.Transaction;
const User = models.User;
const Account = models.Account;

let AccountRoutes = {

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

module.exports = AccountRoutes;

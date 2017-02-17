'use strict';
const models = require('../models');
const Transaction = models.Transaction;
const User = models.User;
const Account = models.Account;

let TransactionRoutes = {

  getAllTransactions: function(req, res) {
    Transaction.find({}, (err, transactions) => {
      if(err) throw err;
      res.json({
        transactions
      });
    });
  },

  makeTransaction: function(req, res) {
    const name = req.body.type === 'Remittance' ? req.body.createdBy :
                                                  req.body.name;
    User.findOne({name})
      .exec()
      .then((user) => {
        let newTransaction = new Transaction(req.body);
        newTransaction._owner.push(user._id);
        newTransaction.save();
        user.payments.push(newTransaction._id);
        user.hookEnabled = false;
        user.save();
        return newTransaction;
      })
      .then((newTransaction) => {
        Account.find({}, (err, account) => {
          if(newTransaction.type === 'Payment') {
            account[0].amount += newTransaction.amount;
          } else {
            account[0].amount -= newTransaction.amount;
          }

          account[0].save((err, account) => {
            if(err) throw err;
            res.json({ message: 'payment made!', newTransaction, account });
          });
        });
      })
      .catch((err) => {
        throw err;
      });

  },

};

module.exports = TransactionRoutes;

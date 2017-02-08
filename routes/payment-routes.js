'use strict';
const models = require('../models');
const Payment = models.Payment;
const User = models.User;
const Account = models.Account;

let PaymentRoutes = {

  getAllPayments: function(req, res) {
    Payment.find({}, (err, payments) => {
      if(err) throw err;
      res.json({
        payments
      });
    });
  }

};

module.exports = PaymentRoutes;

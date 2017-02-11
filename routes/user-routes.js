'use strict';
const models = require('../models');
const Payment = models.Payment;
const User = models.User;
const Account = models.Account;

let UserRoutes = {

  addUser: function(req, res) {
    console.log(req.body);
    User.findOne({name: req.body.name}, (err, user) => {
      if(err) throw err;
      if(!user) {
        var newUser = new User(req.body);
        newUser.save((err, user) => {
          res.json({
            data: user,
            token: user.admin ? user.generateToken() : null
          });
        });
      } else {
        res.json({status: 'failure', message: 'Username taken!'});
      }
    });
  },

  getAllUsers: function(req, res) {
    User.find({}, (err, users) => {
      if(err) throw err;
      res.status(200).json({ users });
    });
  },

  getOneUser: function(req, res) {
    User.findOne({_id:req.params.id}, (err, user) => {
      if(err) throw err;
      res.json({data: user});
    });
  },

  updateUser: function(req, res) {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
      if(err) throw err;
      res.json({message: 'Update successful!', user });
    });
  },

  deleteUser: function(req, res) {
    console.log(req);
    User.findById(req.params.id).exec()
      .then((user) => {
        user.dues.forEach((paymentId) => {
          Payment.findById(paymentId).remove().exec();
        });
        user.remove();
        res.json({message: 'user removed'});
      })
      .catch((err) => {
        throw err;
      });
  },

  addPaymentToUser: function(req, res) {

    User.findOne({_id: req.params.id})
      .populate('dues').exec()
      .then((user) => {
        let newPayment = new Payment(req.body);
        newPayment._owner.push(user._id);
        newPayment.save();
        user.dues.push(newPayment._id);
        user.hookEnabled = false;
        user.save();
        res.json({ message: 'payment added!', newPayment });
      })
      .catch((err) => {
        throw err;
      });

  },

  makePaymentForUser: function(req, res) {
    let payment = req.body
    User.findOne({_id: req.params.id})
      .exec()
      .then((user) => {
        if(req.body.isPaid) {
          let newPayment = new Payment(payment);
          newPayment._owner.push(user._id);
          newPayment.save();
          user.payments.push(newPayment._id);
          user.hookEnabled = false;
          user.save();
          return newPayment;
        } else {
          payment.isPaid = true;
          return payment.save();
        }

      })
      .then((newPayment) => {
        Account.find({}, (err, account) => {
          account[0].amount += newPayment.amount;
          account[0].save((err, account) => {
            if(err) throw err;
            res.json({ message: 'payment made!', newPayment, account });
          });
        })
      })
      .catch((err) => {
        throw err;
      });

  },

  getAllUserPayments: function(req, res) {
    User.findById(req.params.id)
        .populate('payments').exec((err, user) => {
          if(err) throw err;
          const dues = user.payments.filter((payment) => !payment.isPaid);
          const payments = user.payments.filter((payment) => payment.isPaid);
          res.json({ dues, payments });
        });
  }




};

module.exports = UserRoutes;

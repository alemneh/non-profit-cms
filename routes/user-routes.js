'use strict';
const models = require('../models');
const Transaction = models.Transaction;
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
    User.findById(req.params.id, (err, user) => {
      if(err) throw err;

      user.remove();
      res.json({message: 'user removed'});
    });
  },


  getAllUserPayments: function(req, res) {
    User.findById(req.params.id)
        .populate('payments').exec((err, user) => {
          if(err) throw err;
          res.json({ payments: user.payments });
        });
  }




};

module.exports = UserRoutes;

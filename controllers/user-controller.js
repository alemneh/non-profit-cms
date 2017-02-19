'use strict';
const jwtAuth = require('../lib/auth.js');

const UserRoutes= require('../routes/user-routes.js');

module.exports = (userRouter, models) => {

  userRouter.route('/users')
        .get(jwtAuth, (req, res) => {UserRoutes.getAllUsers(req, res); })
        .post(jwtAuth, (req, res) => {UserRoutes.addUser(req, res); });


  userRouter.route('/users/:id')
    .get(jwtAuth, (req, res)    => {UserRoutes.getOneUser(req, res); })
    .put(jwtAuth, (req, res)    => {UserRoutes.updateUser(req, res); })
    .delete(jwtAuth, (req, res) => {UserRoutes.deleteUser(req, res); });



  userRouter.route('/users/:id/payments')
    .get(jwtAuth, (req, res)   => {UserRoutes.getAllUserPayments(req, res); });




};

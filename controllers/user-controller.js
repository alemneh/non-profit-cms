'use strict';

const UserRoutes= require('../routes/user-routes.js');

module.exports = (userRouter, models) => {

  userRouter.post('/signup', (req, res) => {UserRoutes.signUp(req, res); });

  userRouter.get('/users', (req, res) => {UserRoutes.getAllUsers(req, res); });

  userRouter.route('/users/:id')
    .get((req, res)    => {UserRoutes.getOneUser(req, res); })
    .put((req, res)    => {UserRoutes.updateUser(req, res); })
    .delete((req, res) => {UserRoutes.deleteUser(req, res); });


  userRouter.route('/users/:id/dues')
    .post((req, res)   => {UserRoutes.addPaymentToUser(req, res); });

  userRouter.route('/users/:id/payments')
    .post((req, res)   => {UserRoutes.makePaymentForUser(req, res); })
    .get((req, res)   => {UserRoutes.getAllUsersPayments(req, res); });



  userRouter.route('/users/:id/payments/:paymentId')
    .put((req, res)    => {UserRoutes.updateUser(req, res); })
    .delete((req, res) => {UserRoutes.deleteUser(req, res); });



};

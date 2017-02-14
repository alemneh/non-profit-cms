'use strict';

const PaymentRoutes= require('../routes/transaction-routes.js');

module.exports = (paymentRouter, models) => {

  paymentRouter.route('/payments')
    .post((req, res) => {PaymentRoutes.makeTransaction(req, res); })
    .get((req, res)  => {PaymentRoutes.getAllTransactions(req, res); });

};

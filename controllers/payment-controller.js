'use strict';

const PaymentRoutes= require('../routes/payment-routes.js');

module.exports = (paymentRouter, models) => {

  paymentRouter.get('/payments', (req, res) => {PaymentRoutes.getAllPayments(req, res); });

};

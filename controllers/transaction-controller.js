'use strict';
const jwtAuth = require('../lib/auth.js');


const TransactionRoutes = require('../routes/transaction-routes.js');

module.exports = (transactionRouter, models) => {

  transactionRouter.route('/transactions')
    .post(jwtAuth, (req, res) => {TransactionRoutes.makeTransaction(req, res); })
    .get(jwtAuth, (req, res)  => {TransactionRoutes.getAllTransactions(req, res); });

};

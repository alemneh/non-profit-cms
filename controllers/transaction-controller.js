'use strict';

const TransactionRoutes = require('../routes/transaction-routes.js');

module.exports = (transactionRouter, models) => {

  transactionRouter.route('/transactions')
    .post((req, res) => {TransactionRoutes.makeTransaction(req, res); })
    .get((req, res)  => {TransactionRoutes.getAllTransactions(req, res); });

};

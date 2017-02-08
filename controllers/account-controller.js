'use strict';

const AccountRoutes= require('../routes/account-routes.js');

module.exports = (accountRouter, models) => {

  accountRouter.route('/accounts')
    .post((req, res) => {AccountRoutes.createAccount(req, res); })
    .get((req, res) => {AccountRoutes.getAllAccounts(req, res); });

};

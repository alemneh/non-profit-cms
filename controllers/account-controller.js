'use strict';
const jwtAuth = require('../lib/auth.js');

const AccountRoutes= require('../routes/account-routes.js');

module.exports = (accountRouter, models) => {

  accountRouter.route('/accounts')
    .post(jwtAuth, (req, res) => {AccountRoutes.createAccount(req, res); })
    .get(jwtAuth, (req, res) => {AccountRoutes.getAllAccounts(req, res); });

};

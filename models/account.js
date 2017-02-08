'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const accountSchema = new mongoose.Schema({
    amount: Number,
    name: String
  },{
    timestamps: true
  });

  const Account = mongoose.model('Account', accountSchema);
  models.Account = Account;
};

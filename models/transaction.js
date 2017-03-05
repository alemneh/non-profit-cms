'use strict';

module.exports = (mongoose, models) => {
  let transactionSchema = new mongoose.Schema({
    _owner: [{type: String, ref: 'User'}],
    amount: {type:Number, default: 15},
    notes: String,
    type: String,
    name: String,
    createdBy: String
  },{
    timestamps: true
  });
  let Transaction = mongoose.model('Transaction', transactionSchema);
  models.Transaction = Transaction;
};

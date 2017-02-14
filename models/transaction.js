'use strict';

module.exports = (mongoose, models) => {
  let transactionSchema = new mongoose.Schema({
    _owner: [{type: String, ref: 'User'}],
    amount: {type:Number, default: 15},
    type: String,
    name: String,
    isPaid: {type: Boolean, default: false}
  },{
    timestamps: true
  });
  let Transaction = mongoose.model('Transaction', transactionSchema);
  models.Transaction = Transaction;
};

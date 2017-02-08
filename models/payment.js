'use strict';

module.exports = (mongoose, models) => {
  let paymentSchema = new mongoose.Schema({
    _owner: [{type: String, ref: 'User'}],
    amount: {type:Number, default: 15},
    name: String,
    isPaid: {type: Boolean, default: false}
  },{
    timestamps: true
  });
  let Payment = mongoose.model('Payment', paymentSchema);
  models.Payment = Payment;
};

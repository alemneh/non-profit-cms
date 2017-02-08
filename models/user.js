'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function(mongoose, models) {
  let Schema = mongoose.Schema;
  const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: {type: Boolean, default: false},
    payments: [{type: Schema.Types.ObjectId, ref:'Payment' }],
    role: String,
    committee: Boolean,
    volunteer: Boolean,
    email: String,
    telephone: Number,
    street: String,
    city: String,
    state: String,
    zipCode: Number,
    hookEnabled: {
      type: Boolean,
      require: false,
      default: true
    }
  },{
    timestamps: true
  });
  var _this;
  userSchema.pre('save', function(next) {
    _this = this;
    if(_this.hookEnabled && _this.admin) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
      next();
    } else {
      next();
    }
  });

  //userSchema.methods.hashPassword
  userSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  userSchema.methods.generateToken = function() {
    return jwt.sign({id: this._id}, 'GAME TIME');
  };

  const User = mongoose.model('User', userSchema);
  models.User = User;

};

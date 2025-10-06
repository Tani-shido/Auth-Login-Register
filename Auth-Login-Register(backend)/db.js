const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserDetails = new Schema({
    username: {type: String},
    password: {type: String}
});

const UserModel = mongoose.model("UserDetails", UserDetails);

module.exports = { UserModel }
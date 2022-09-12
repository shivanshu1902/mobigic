const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivanshu:shukla1@cluster0.xdx1via.mongodb.net/upload?retryWrites=true&w=majority");
};

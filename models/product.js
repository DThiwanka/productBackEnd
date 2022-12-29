const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    sku: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    productname: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    productdesc: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('Product', productSchema);

//books
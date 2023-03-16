const mongoose = require("mongoose");
const productShema = new mongoose.Schema({
    ProductName:{
        type:String,
    },
    ProductCode:{
        type:String,
    },
    ProductImg:{
        type:String,
    },
    UnitPrice:{
        type:String,
    },
    Quantity:{
        type:String,
    },
    TotalPrice:{
        type:String,
    },
    CreatedDate:{
        type:Date,
        default:Date.now(),
    },
},

{versionKey:false}

);
const ProductModel = mongoose.model("products",productShema)
module.exports = ProductModel;
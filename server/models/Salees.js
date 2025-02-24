const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    saleId: {
        type: String,
        default: function (){
           return `SID-${Date.now()}` ;
        },
    },
    salesPersonName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salesBranch: {
        type: String,
        required: true,
    },
    salesDate: {
        type: String,
        required: true,
    },
    salesAmount: {
        type: String,
        required: true,
    },

});

const saleModel = mongoose.model("sales", salesSchema);
module.exports = saleModel;

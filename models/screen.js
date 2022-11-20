const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    multiplexId: {
        type: String,
        required: true,
      },
      deleted: {
        type: Number,
        required: true,
      },
      seats : [{
        category : String,
        count : Number
    }]
}, 
{
    timestamps: true
}
);

module.exports = mongoose.model("screen", screenSchema);
const mongoose = require("mongoose");

const multiplexSchema = new mongoose.Schema({
    screenCount: {
        type: Number,
        required: true,
      },
      deleted: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
}, 
{
    timestamps: true
}
);

module.exports = mongoose.model("multiplex", multiplexSchema);
const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    multiplexId: {
        type: String,
        required: true,
    },
    deleted: {
        type: Number,
        required: true,
    },
    screenId: {
        type: String,
        required: true,
    },
    slot: {
        type: Number,
        required: true,
    },
    seatsAvailable:[{
        category : String,
        count : Number,
        price: Number
    }],
    from:{type: String, required:true},
    to:{type: String, required:true},
}, 
{
    timestamps: true
}
);

module.exports = mongoose.model("schedule", scheduleSchema);
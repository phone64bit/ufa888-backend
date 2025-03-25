const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }, 
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", BookingSchema);
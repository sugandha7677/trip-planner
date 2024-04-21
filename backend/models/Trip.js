import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
    {
        location: String,
        startDate: Date,
        endDate: Date,
        budget: Number,
        currency: String,
        activity: String
    }
);

export default mongoose.model("Trip", tripSchema);
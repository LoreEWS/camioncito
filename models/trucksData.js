import mongoose from "mongoose";

const truckSchema = mongoose.Schema({
    capacity: Number,
    gas: Number,
    distance: Number,
    pilotAvailability: Boolean,
    vehicleAvailability: Boolean,
    selectedFile: String,
    depreciation: Number,
    load: String,
});

const TruckData = mongoose.model('TruckData', truckSchema);

export default PostMessage
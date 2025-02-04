import { Schema, model } from 'mongoose';

const ShipmentSchema = new Schema({
  shipmentId: { type: String, required: true, unique: true },
  containerId: { type: String, required: true },
  route: [{ type: String, required: true }], 
  currentLocation: { type: String, required: true },
  currentETA: { type: Date, default: null },
  status: { 
    type: String, 
    enum: ['Pending', 'In Transit', 'Delivered'], 
    default: 'Pending' 
  }
}, { timestamps: true });

export default model('Shipment', ShipmentSchema);

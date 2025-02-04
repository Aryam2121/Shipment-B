import Shipment from '../models/Shipment.js';
import { v4 as uuidv4 } from 'uuid'; 

export const getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shipments" });
  }
};

export const getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) return res.status(404).json({ error: "Shipment not found" });

    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shipment" });
  }
};

export const createShipment = async (req, res) => {
  try {
    const { containerId, route, currentLocation } = req.body;
    
    if (!containerId || !route || route.length === 0 || !currentLocation) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const shipment = new Shipment({
      shipmentId: uuidv4(),
      containerId,
      route,
      currentLocation,
      status: "In Transit",
    });

    await shipment.save();
    res.status(201).json(shipment);
  } catch (error) {
    res.status(500).json({ error: "Error creating shipment" });
  }
};

export const updateShipmentLocation = async (req, res) => {
  try {
    const { currentLocation } = req.body;
    const shipment = await Shipment.findById(req.params.id);

    if (!shipment) return res.status(404).json({ error: "Shipment not found" });

    shipment.currentLocation = currentLocation;

    if (shipment.route.includes(currentLocation)) {
      shipment.status = "Delivered";
    } else {
      shipment.status = "In Transit";
    }

    await shipment.save();
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ error: "Error updating shipment location" });
  }
};

export const getETA = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) return res.status(404).json({ error: "Shipment not found" });

    res.status(200).json({ eta: shipment.currentETA });
  } catch (error) {
    res.status(500).json({ error: "Error fetching ETA" });
  }
};

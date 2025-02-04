import { Router } from 'express';
const router = Router();
import { getShipments, getShipmentById, createShipment, updateShipmentLocation, getETA } from '../controllers/shipmentController.js';

router.get('/shipments', getShipments);
router.get('/shipment/:id', getShipmentById);
router.post('/shipment', createShipment);
router.post('/shipment/:id/update-location', updateShipmentLocation);
router.get('/shipment/:id/eta', getETA);

export default router;

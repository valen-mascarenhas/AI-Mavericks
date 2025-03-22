const express = require('express');
const { sendImpactMetrics, sendFoodOrder, sendFoodOrderAdjustment } = require('../controllers/emailController');

const router = express.Router();

router.post('/send-impact-metrics', sendImpactMetrics);
router.post('/send-food-order', sendFoodOrder);
router.post('/send-food-order-adjustment', sendFoodOrderAdjustment);

module.exports = router;

const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const Mailgun = require('mailgun.js');

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

/**
 * Utility function to load and compile HTML templates
 */
const loadTemplate = (templateName, data) => {
    const filePath = path.join(__dirname, `../templates/${templateName}.html`);
    const templateSource = fs.readFileSync(filePath, 'utf-8');
    const template = handlebars.compile(templateSource);
    return template(data);
};

/**
 * Send Impact Metrics Report Email
 */
exports.sendImpactMetrics = async (req, res) => {
    try {
        const { reduction_food_waste, employee_satisfaction, prediction_accuracy, cost_savings, recipient } = req.body;

        const htmlContent = loadTemplate('impactMetrics', { reduction_food_waste, employee_satisfaction, prediction_accuracy, cost_savings });

        const response = await mg.messages.create(DOMAIN, {
            from: 'CafeAssist <postmaster@sandbox04f83e3d53544e7ab2c2e4cbec537ac7.mailgun.org>',
            to: recipient,
            subject: 'Impact Metrics Report',
            html: htmlContent
        });

        res.status(200).json({ message: 'Impact Metrics email sent successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};

/**
 * Send Daily Food Order Email
 */
exports.sendFoodOrder = async (req, res) => {
    try {
        const { date, lunch, snacks, tea, coffee, recipient } = req.body;

        const htmlContent = loadTemplate('foodOrder', { date, lunch, snacks, tea, coffee });

        const response = await mg.messages.create(DOMAIN, {
            from: 'CafeAssist <postmaster@sandbox04f83e3d53544e7ab2c2e4cbec537ac7.mailgun.org>',
            to: recipient,
            subject: `Daily Food Order for ${date}`,
            html: htmlContent
        });

        res.status(200).json({ message: 'Food order email sent successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};

/**
 * Send Food Order Adjustment Email
 */
exports.sendFoodOrderAdjustment = async (req, res) => {
    try {
        const { restaurantTeam, date, lunch, snacks, tea, coffee, recipient } = req.body;

        const htmlContent = loadTemplate('foodOrderAdjustment', { restaurantTeam, date, lunch, snacks, tea, coffee });

        const response = await mg.messages.create(DOMAIN, {
            from: 'CafeAssist <postmaster@sandbox04f83e3d53544e7ab2c2e4cbec537ac7.mailgun.org>',
            to: recipient,
            subject: `Adjustment to Today's Food Order - ${date}`,
            html: htmlContent
        });

        res.status(200).json({ message: 'Food order adjustment email sent successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};

const express = require('express');
const router = express.Router();
const Contact = require('./model/contact.js')
const cors = require('cors');

router.use(cors({
    origin:'*'
}));

router.get('/all', async (req, res) => {
    const contact = await Contact.find()

    res.send(contact)
});

router.get('/search', async (req, res) => {
    try { 
        const contact = await Contact.findOne({name: req.body.name})
    } catch {
        res.status(404)
        res.send({ error: "No existe la vaina!"})
    }
})

router.post('/send', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    await contact.save()
    res.send(contact)
})

module.exports = router
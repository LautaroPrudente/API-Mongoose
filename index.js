const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/formapi', {})
.then(() => {
    const app = express()
    app.use(express.json())
    app.use('/api', routes)

    app.listen(5000, () => {
        console.log('Server OK!')
    })

    app.use(cors({
        origin:'*'
    }))
});

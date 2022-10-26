const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send('Server side')
})

app.listen(5000)
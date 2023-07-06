const express = require('express')
const app = express();

app.use('/', (req,res, next) => {
    req.user = "Mathis"
    next()
    
})
app.use((httpRequest, htppResponse, next) => {
    htppResponse.send('<h1>test</h1>')
})

app.listen(3000);


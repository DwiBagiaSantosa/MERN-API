const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog')

app.use(bodyParser.json())
app.use(cors())


app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({message: message, data: data})
})
// app.use('/v1/customer', anotherRoutes);


app.listen(4000);
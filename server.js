//back-end
const express = require('express');
const productRoutes = require('./routes');
const mongoose = require('mongoose');

const app = express();

// constants
const PORT = 8080;
const HOST = '0.0.0.0'

mongoose.connect('mongodb://mongodb:27017/', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('MongoDb connected...'))
	.catch(err => {
		console.log(err)
	});

app.use(express.json())
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use((error, req, res, next) => {
	res.status(500).json({ message: error.message })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;
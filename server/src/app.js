const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import morgan from 'morgan';


const app = express();
app.use(morgan('combime'))
app.use(bodyParser.json());
app.use(cors())

// first back-end app url -> http://localhost:8081/status
app.get('/status', (req, res) => {
	res.send({
		message: "hola world"
	})
})

app.post('/register', (req, res) => {
	res.send({
		message: `your user ${req.body.login} was registeres`
	})
})

app.listen(process.env.PORT || 8081)
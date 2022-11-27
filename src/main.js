import config from "./config/config.js";
import express from "express";


const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(config.apiServer.port, () => {
	console.log(`Kvitter API Server listening at http://localhost:${config.apiServer.port}`)
})


import config from "./config/config.js";
import express from "express";
import usersRouter from "./features/users/usersRouter.js";


const app = express();

app.use("/users", usersRouter);

app.listen(config.apiServer.port, () => {
	console.log(`Kvitter API Server listening at http://localhost:${config.apiServer.port}`)
})


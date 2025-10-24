import express from 'express';
import { createServer } from 'node:http';
import { appRouter } from "./modules/routes.js";
import {errorHandler} from "./middleware/errorHandler.js";

const app = express();
const server = createServer(app);

//application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

//Routes
app.use('/api', appRouter);
app.use(errorHandler);


//Catch all routes
app.use((req, res) => {
    const method = req.method.toLowerCase();
    const url = req.url;

    res.status(404).json({
        success: false,
        message: `The requested ${url} not found in the ${method}`,

    })
})

export { app, server };
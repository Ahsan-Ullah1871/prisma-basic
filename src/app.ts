import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import AllRoutes from "./AllRoutes";

const app = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Application routes
app.use("/api/v1/", AllRoutes);

// testing
app.get("/", (req, res) => {
	res.send("Hello server test");
});

export default app;


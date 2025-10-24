
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

let data = {};

app.post("/api/components", (req, res) => {
    data = req.body;
    res.send({ message: "Data saved", data });
});

app.get("/api/components", (req, res) => {
    res.send(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));

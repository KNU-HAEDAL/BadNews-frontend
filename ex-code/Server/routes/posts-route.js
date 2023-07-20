import express from "express";
import fs from "fs";

let router = express.Router();

const DB_PATH = "./database/posts.json";

router.get("/", (request, response) => {
    fs.readFile(DB_PATH, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            response.status(500).send("File Read Failed '/database/posts.json'");
            console.log("File Read Failed '/database/posts.json'");
        } else {
            response.status(200).json(JSON.parse(data));
        }
    });
});

router.post("/", async (request, response) => {
    const recievedData = request.body;
    console.log(recievedData);

    fs.readFile(DB_PATH, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log("File Read Failed '/database/posts.json'");
            response.status(500).send("File Read Failed '/database/posts.json'");
        } else {
            const newData = JSON.parse(data);
            newData.push(recievedData);

            fs.writeFile(DB_PATH, JSON.stringify(newData), { encoding: "utf-8" }, (err) => {
                if (err) {
                    console.log("File Write Failed '/database/posts.json'");
                    response.status(503).send("File Write Failed '/database/posts.json'");
                } else {
                    console.log("File Write Success '/database/posts.json'");
                    response.status(200).send("File Write Success '/database/posts.json'");
                }
            });
        }
    });
});

export default router;

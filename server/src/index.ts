import express, { Express, Request, Response } from "express";
import MeaningCloud from 'meaning-cloud'
import { Api_Key, port, Service } from "../env";
const app: Express = express();

const meaningCloud = new MeaningCloud({
    key: Api_Key,
    endpoints: {
        text_classification: 'class-1.1'
    }
})
console.log(Api_Key)

app.get("/", async (req: Request, res: Response) => {
    res.send("started");
});



app.listen(port, () => {
    console.log(`started at http://localhost:${port}`);
});
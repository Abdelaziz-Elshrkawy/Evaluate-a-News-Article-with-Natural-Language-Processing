import express, { Express, Request, Response } from "express";
import axios from "axios";
import { Api_Key, port } from "./env";
import cors from "cors";
import { join } from "path";
const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "./public")));
app.post("/", async (req: Request, res: Response) => {
    const params = new URLSearchParams();
    params.append("key", Api_Key as string);
    params.append("url", req.body.url);
    params.append("lang", "en");
    params.append("model", "IPTC_en");

    try {
        const response = await axios.post(
            "https://api.meaningcloud.com/class-2.0",
            params
        );
        console.log("Response:", response.data);
        res.send(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error occurred");
    }

    // res.json({
    //     url: req.body,
    //     category_list: [
    //         {
    //             abs_relevance: "0.5578266",
    //             code: "04016000",
    //             label: "economy, business and finance - company information",
    //             relevance: "100",
    //         },
    //         {
    //             abs_relevance: "0.41836002",
    //             code: "11016006",
    //             label: "politics - interior policy - personal data collection",
    //             relevance: "75",
    //         },
    //         {
    //             abs_relevance: "0.40930763",
    //             code: "04010006",
    //             label: "economy, business and finance - media - online",
    //             relevance: "73",
    //         },
    //         {
    //             abs_relevance: "0.38791206",
    //             code: "04010000",
    //             label: "economy, business and finance - media",
    //             relevance: "70",
    //         },
    //         {
    //             abs_relevance: "0.3082892",
    //             code: "04003008",
    //             label: "economy, business and finance - computing and information technology - security",
    //             relevance: "55",
    //         },
    //     ],
    //     status: {
    //         code: "0",
    //         msg: "OK",
    //         credits: "6",
    //         remaining_credits: "82",
    //     },
    // });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

import { config } from "dotenv";

config();

export const { port, Api_Key, Api_Id, Service } = process.env;

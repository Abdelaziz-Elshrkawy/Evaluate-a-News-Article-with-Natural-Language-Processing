import { config } from "dotenv";

config();

export const { port, Api_Key, Api_Id, Service, Api_Url } = process.env;

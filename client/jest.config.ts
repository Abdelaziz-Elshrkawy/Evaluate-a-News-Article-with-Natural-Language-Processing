// jest.config.ts
import { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore node_modules and dist folders
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json", // Path to your TypeScript configuration file
        },
    },
};

export default config;

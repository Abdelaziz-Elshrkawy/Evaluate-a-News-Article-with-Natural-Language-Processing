import { errorTemp, resultTemp } from "../ts/templates";

describe("Testing Html Template functions", () => {
    test("testing the error function", () => {
        expect(errorTemp("test error").trim()).toEqual(
            `<h3 class="error">test error</h3>`
        );
    });
    test("result list existence test", () => {
        expect(resultTemp).toBeDefined();
    });
});

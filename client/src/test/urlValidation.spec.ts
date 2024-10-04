import checkUrl from "../ts/checkUrl";

describe("Testing Url validation", () => {
    test("testing valid url", () => {
        expect(
            checkUrl("https://blog.hubspot.com/website/what-is-rest-api")
        ).toBe(true);
    });
    test("testing invalid url", () => {
        expect(
            checkUrl("hts://blog.hubspot.com/website/what-is-rest-api")
        ).toBe(false);
    });
    test("testing another invalid url", () => {
        expect(checkUrl("what-is-rest-api")).toBeFalsy();
    });
});

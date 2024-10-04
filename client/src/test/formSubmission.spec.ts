import handleFormSubmission from "../ts/formSubmition";

describe("form submission", () => {
    test("insuring the existence of the function", () => {
        expect(handleFormSubmission).toBeDefined();
    });
});

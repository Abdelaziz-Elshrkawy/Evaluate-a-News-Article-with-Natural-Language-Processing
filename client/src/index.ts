import "./css/style.scss";
import handleFormSubmission from "./ts/formSubmition";

if (prod_flag as boolean | undefined) {
    import("./ts/serviceWorker");
}

handleFormSubmission();

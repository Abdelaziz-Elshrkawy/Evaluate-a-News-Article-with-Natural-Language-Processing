import checkUrl from "./checkUrl";
import { errorTemp, resultTemp } from "./templates";

export default function handleFormSubmission() {
    const serverURL = prod_flag ? "/" : "http://localhost:3504";
    const userInput: HTMLElement | null = document.getElementById("user-input");
    const submit: HTMLElement | null = document.getElementsByTagName("form")[0];
    const result: HTMLElement | null = document.getElementById("result");
    submit?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (result && userInput) {
            if (!checkUrl((userInput as HTMLInputElement).value)) {
                result.innerHTML = errorTemp("Please insert a valid url");
            } else {
                fetch(serverURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        url: (userInput as HTMLInputElement).value,
                    }),
                })
                    .then(async (e) => {
                        result.innerHTML = "Getting data...";
                        const data = await e.json();
                        console.log(data);
                        result.innerHTML = resultTemp(data);
                        console.log(data.category_list);
                    })
                    .catch((e) => {
                        result.innerHTML = errorTemp(e.message);
                    });
            }
        }
    });
}

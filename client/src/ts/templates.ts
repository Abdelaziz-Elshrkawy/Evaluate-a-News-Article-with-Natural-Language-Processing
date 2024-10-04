import { categoryKeys } from "../type/enum";
import { categoryList } from "../type/general";

export function errorTemp(err: string): string {
    return `<h3 class="error">${err}</h3>
`;
}

export function resultTemp(result: {
    category_list: categoryList[];
    status: {
        code: string;
        msg: string;
    };
}): string {
    let list = "";
    const status = result.status.code;
    for (let category of result?.category_list) {
        list += `
            ${resultRow(category)}
        `;
    }
    return `
        <div id="result-list">
            <div id="status-cont" style="background-color: ${
                status ? "green" : "red"
            }">
                <p id="status-text">Status: ${result.status.msg} </p>
            </div>
            ${list}
        </div>
    `;
}

function resultRow(data: categoryList): string {
    let resultRowHtml = "";
    for (let key in data) {
        resultRowHtml += `
        <div class="result-sub-row">
            <span class="result-key">${
                categoryKeys[key as keyof typeof categoryKeys]
            }: </span>
            <span class="result-value">${data[key as keyof categoryList]}</span>
        </div>
        `;
    }
    return `
    <div class="result-row">
        ${resultRowHtml}
    </div>
`;
}

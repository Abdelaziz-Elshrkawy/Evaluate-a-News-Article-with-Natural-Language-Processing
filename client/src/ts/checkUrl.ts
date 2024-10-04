export default function checkUrl(url: string): boolean {
    const urlRegex =
        /^(https?:\/\/)?(www\.)?([a-zA-Z0-9_-]+(\.[a-zA-Z]{2,})+)(\/[^\s]*)?$/;

    return urlRegex.test(url);
}

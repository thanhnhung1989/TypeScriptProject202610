 function filterAndCleanElementText(texts: string[]): string[] {
    let result: string[] = [];
    for (let text of texts) {
        let cleanedText = text.trim();
        if (cleanedText.length > 0) {
            cleanedText = cleanedText.toUpperCase();
            if(!result.includes(cleanedText)) {
            result.push(cleanedText);
            }
        }
    }
    return result;
}
let texts: string[] = ["  Hello  ", "  ", "World", "   TypeScript   ", ""];
let cleanedTexts: string[] = filterAndCleanElementText(texts);
console.log(cleanedTexts); // Output: ["Hello", "World", "TypeScript"]
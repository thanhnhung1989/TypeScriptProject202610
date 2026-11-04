type HeaderPair = [string, string];
function convertToHeaderObject(headers: HeaderPair[]): Record<string, string> {
  return Object.fromEntries(headers); // chuyen doi array thanh object
}
const inputHeaders: HeaderPair[] = [["Content-Type", "application/json"]];
function convertHeadersToObject(headers: HeaderPair[]): Record<string, string> {
  let result: Record<string, string> = {};
  for (let header of headers) {
    result[header[0]] = header[1];
  }
  return result;
}
console.log(convertHeadersToObject(inputHeaders)); // Output: { "Content-Type": "application/json" }

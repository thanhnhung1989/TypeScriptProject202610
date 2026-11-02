type HeaderPair = [string, string];
let headerObject: HeaderPair[] = [
  ["Authorization", "Bearer token123"],
  ["Content-Type", "application/json"],
];
function convertHeadersToObject(headers: HeaderPair[]): Record<string, string> {
  let result: Record<string, string> = {};
  for (let header of headers) {
    result[header[0]] = header[1];
  }
  return result;
}
console.log(convertHeadersToObject(headerObject)); // Output: { Authorization: "Bearer token123",

type HeaderPair = [string, string];
function convertToHeaderObject(headers: HeaderPair[]): Record<string, string> {
  return Object.fromEntries(headers); // chuyen doi tuong array thanh object
}
const inputHeaders: HeaderPair[] = [
  ["Content-Type", "application/json"],
  ["Authorization", "Bearer token"],
];

console.log(convertToHeaderObject(inputHeaders));

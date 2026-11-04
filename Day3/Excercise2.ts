interface User {
  userName: string;
  password: string;
}
import { parse } from "csv-parse/browser/esm/sync";
// @ts-ignore Node.js built-in module; add @types/node for full type definitions.
import * as fs from "fs";
// Hàm đọc dữ liệu từ file JSON và trả về mảng các đối tượng User
// @ts-ignore Node.js built-in module; add @types/node for full type definitions.
import * as path from "path";
const dataFilePath = "./TestData/User.csv";
function readTestDatafromCSV(): User[] {
  const data = fs.readFileSync(dataFilePath, "utf8"); //
  const users: User[] = parse(data, { columns: true }); // Chuyển đổi dữ liệu CSV thành mảng các đối tượng User
  return users;
}
console.log(readTestDatafromCSV());

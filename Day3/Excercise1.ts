// @ts-ignore Node.js types may be unavailable in this project configuration.
import * as fs from "fs";
// @ts-ignore Node.js types may be unavailable in this project configuration.
import * as path from "path";
// fs error => install: npm install --save-dev @types/node
// Test tính năng Đăng ký tài khoản
// Yêu cầu:Tạo một file dữ liệu JSON chứa danh sách các trường hợp đăng ký (hợp lệ và không hợp lệ).Viết hàm đọc file này và trả về 1 mảng
interface User {
  userName: string;
  password: string;
}
const dataFilePath = path.resolve("TestData/Login.json"); // Đường dẫn tuyệt đối đến file dữ liệu JSON
function readTestData(): User[] {
  // Hàm đọc dữ liệu từ file JSON và trả về mảng các đối tượng User
  const data = fs.readFileSync(dataFilePath, "utf8"); //
  return JSON.parse(data);
}
console.log(readTestData());

type TestCaseUser = {
  userName: string;
  age: number;
  email: string;
  role: "admin" | "user" | "guest";
};

let testUser: TestCaseUser[] = [
  {
    userName: "JohnDoe",
    age: 30,
    email: "johndoe@example.com",
    role: "user",
  },
  {
    userName: "JaneDoe1",
    age: 25,
    email: "janedoe1@example.com",
    role: "admin",
  },
  {
    userName: "GuestUser",
    age: 20,
    email: "guestuser@example.com",
    role: "guest",
  },
];

function getValidAdminUsers(users: TestCaseUser[]): string[] {
  return users
    .filter((user) => user.role === "admin" && user.age >= 18)
    .map((user) => user.userName);
}
console.log(getValidAdminUsers(testUser)); // Output: ["JaneDoe1"]

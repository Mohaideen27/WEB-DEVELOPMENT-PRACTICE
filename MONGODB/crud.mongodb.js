// CRUD OPERATIONS

use("CRUDDB");

// console.log(db);
// CREATE
// db.createCollection("Courses");

// db.Courses.insertOne({
//   name: "Sameer Web Dev",
//   price: 0,
//   assignment: 12,
//   projects: 45,
// });

// db.Courses.insertMany([
//   {
//     username: "sarah_k",
//     email: "sarah.k@example.com",
//     age: 34,
//     isActive: true,
//     roles: ["admin", "editor"],
//     preferences: {
//       theme: "light",
//       notifications: false,
//     },
//     lastLogin: "2024-05-18T14:15:22Z",
//   },
//   {
//     username: "mike_w",
//     email: "mike.w@example.com",
//     age: 41,
//     isActive: false,
//     roles: ["subscriber"],
//     preferences: {
//       theme: "dark",
//       notifications: true,
//     },
//     lastLogin: "2024-02-10T08:05:00Z",
//   },
//   {
//     username: "emily_r",
//     email: "emily.r@example.com",
//     age: 22,
//     isActive: true,
//     roles: ["subscriber", "contributor"],
//     preferences: {
//       theme: "system",
//       notifications: true,
//     },
//     lastLogin: "2024-05-17T22:45:10Z",
//   },
//   {
//     username: "jordan_t",
//     email: "jordan.t@example.com",
//     age: 28,
//     isActive: true,
//     roles: ["contributor"],
//     preferences: {
//       theme: "dark",
//       notifications: false,
//     },
//     lastLogin: "2024-05-18T09:12:33Z",
//   },
//   {
//     username: "chris_p",
//     email: "chris.p@example.com",
//     age: 55,
//     isActive: false,
//     roles: ["subscriber"],
//     preferences: {
//       theme: "light",
//       notifications: false,
//     },
//     lastLogin: "2023-11-20T11:30:00Z",
//   },
//   {
//     username: "nina_s",
//     email: "nina.s@example.com",
//     age: 30,
//     isActive: true,
//     roles: ["admin"],
//     preferences: {
//       theme: "dark",
//       notifications: true,
//     },
//     lastLogin: "2024-05-18T16:00:05Z",
//   },
//   {
//     username: "omar_h",
//     email: "omar.h@example.com",
//     age: 26,
//     isActive: true,
//     roles: ["subscriber"],
//     preferences: {
//       theme: "light",
//       notifications: true,
//     },
//     lastLogin: "2024-05-15T19:20:44Z",
//   },
//   {
//     username: "lucy_m",
//     email: "lucy.m@example.com",
//     age: 39,
//     isActive: true,
//     roles: ["editor", "contributor"],
//     preferences: {
//       theme: "system",
//       notifications: true,
//     },
//     lastLogin: "2024-05-18T07:55:12Z",
//   },
//   {
//     username: "david_l",
//     email: "david.l@example.com",
//     age: 47,
//     isActive: false,
//     roles: ["subscriber"],
//     preferences: {
//       theme: "dark",
//       notifications: false,
//     },
//     lastLogin: "2024-01-05T13:10:00Z",
//   },
//   {
//     username: "zara_v",
//     email: "zara.v@example.com",
//     age: 31,
//     isActive: true,
//     roles: ["subscriber", "contributor"],
//     preferences: {
//       theme: "light",
//       notifications: true,
//     },
//     lastLogin: "2024-05-18T18:05:59Z",
//   },
// ]);

// READ

// let a = db.Courses.find({ age: 47 });
// console.log(a.toArray());
let b = db.Courses.findOne({ age: 47 });
console.log(b);

// UPDATE

// db.Courses.updateMany({ age: 47 }, { $set: { age: 25 } });

// DELETE

// db.Courses.deleteMany({ price: 0 });

// console.log(b);

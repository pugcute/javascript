// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// let isEmpty = (obj) => {
//   for (key in obj) {
//     return true;
//   }
//   return false;
// };

// let schedule = { 830: 1 };
// alert(isEmpty(schedule));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// let multiplyNumeric = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// };
// // 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// console.log(menu);
// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// let map1 = new Map();
// map1.set(1, 234);
// map1.set(2, 345);
// let check1 = map1.has(1);
// let check3 = map1.has(3);
// map1.delete(2);
// console.log(map1.size, check1, check3);
// console.log(map1.get(1));

let set1 = new Set();
set1.add(1); // 값 추가 후 자신을 반환
set1.add(2);
set1.delete(1); // 값 삭제 후 삭제 성공시 true 반환, 아니면 false
set1.has(2);
console.log(set1);
set1.size;

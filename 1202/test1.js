alert("외부 js 파일 실행"); // ;를 빼먹지 맙시다.
// use strict는 클래스나 모듈 분리시 사용안하므로 넘어감
let fruit = "apple";
let computer = "sdf";
let bag = {
  [fruit]: 5,
};
bag[computer] = 5;
console.log(bag);
alert("apple" in bag);

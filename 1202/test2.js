// let admin;

// let name = "John";
// admin = name;
// alert(admin);
// 과제 2
// const a = 2.88e8;
// const b = 1 / 0;
// const c = -1 / 0;
// const d = NaN;

// console.log(a, b, typeof c, typeof d);
// const a = "pug";
// const b = "cute";
// const c = `${a}${b}`;
// console.log(c);

// prompt와 confirm 정리
// prompt는 파이썬의 Input, esc나 취소 시에는 null
// confirm은 확인 버튼 -확인 누르면 true/ 안 누르면 false

// let name = prompt("당신의 이름은", "");
// if (typeof name === "string") {
//   let con = confirm(`당신의 이름은 ${name}입니까?`);
//   alert(con);
// }

// let answer = prompt("자바스크립트의 공식 이름은 무엇일까요?", "");
// if (answer === "ECMAScript") {
//   alert("정답입니다.");
// } else {
//   alert("몰루?");
// }

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "동의하십니까?",
  () => {
    alert("동의하셨습니다.");
  },
  () => {
    alert("취소 버튼을 누르셨습니다.");
  }
);

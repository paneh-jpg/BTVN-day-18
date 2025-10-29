console.log("Hello Word");

//29-10-2025 (Làm bài tập)
//Bài 1:
// let keyWord = "o";
// let total = 0;
// let content = `Ipsum dolor, sit amet consectetur Lorem  adipisicing elit. Minus velit id
//     recusandae iusto autem sunt ipsum, temporibus eius veritatis, minima
//     officiis sint quidem explicabo impedit mollitia quaerat aut ducimus tempora
//     Lorem eligendi. Possimus tempora exercitationem, assumenda neque, ipsam
//     cupiditate hic dolores aliquam accusantium Lorem quidem corrupti quisquam
//     voluptate,  Lorem  odio?Lorem ipsum dolor sit amet consectetur adipisicing
//     elit. Facilis, exercitationem? Modi, excepturi corrupti reiciendis, quae
//     itaque veniam accusamus dolorem Lorem quo tempora dolorum eveniet officiis
//     nihil veritatis iste libero odit, nesciunt Lorem. Esse eum eveniet a. In,
//     distinctio Lorem non provident cum magni eos aut odit fuga facere
//     ratione eius!`;

// let newContent = "";
// let position = content.toLowerCase().indexOf(keyWord.toLowerCase());

// while (position !== -1) {
//   newContent =
//     newContent +
//     content.slice(0, position) +
//     "<span>" +
//     content.slice(position, position + keyWord.length) +
//     "</span>";

//   // Cắt content
//   content = content.slice(position + keyWord.length);
//   total++;
//   position = content.toLowerCase().indexOf(keyWord.toLowerCase());
// }

// newContent += content;

// document.body.innerHTML = `<p>Từ khóa : ${keyWord}</p>
// <p>${newContent}</p>
// <p>Đã tìm thấy ${total} kết quả phù hợp.</p>`;

//Bài 2: Kiểm tra độ mạnh yếu của mật khẩu.
// Từ 8 kí tự trở lên
// có ít nhất 2 kí tự viết hoa
// Có ít nhất 1 số
// Có ít nhất 1 kí tự đặc biệt.

function isStrongPassword(password) {
  const specialChar = "!@#$%^&*()";
  const number = "0123456789";
  if (password.length < 8) return "Mật khẩu cần ít nhất 8 kí tự.";

  let hasSpecial = false;
  let hasNum = false;
  let hasLowChar = false;
  let hasUpChar = false;
  let countUpChar = 0;
  let countLowChar = 0;

  for (let i = 0; i < password.length; i++) {
    if (specialChar.includes(password[i])) hasSpecial = true;
    else if (number.includes(password[i])) hasNum = true;
    else if (password[i] >= "A" && password[i] <= "Z") {
      countUpChar += 1;
    } else if (password[i] >= "a" && password[i] <= "z") {
      countLowChar += 1;
    }
  }

  if (countUpChar > 1) {
    hasUpChar = true;
  }

  if (countLowChar > 1) {
    hasLowChar = true;
  }

  if (!hasSpecial) {
    return "Mật khẩu cần ít nhất 1 kí tự đặc biệt.";
  }

  if (!hasNum) {
    return "Mật khẩu cần ít nhất 1 kí tự số.";
  }

  if (!hasUpChar) {
    return "Mật khẩu cần ít nhất 2 kí tự viết hoa.";
  }

  if (!hasLowChar) {
    return "Mật khẩu cần ít nhất 2 kí tự viết thường";
  }

  return `Mật khẩu của bạn là : ${password}`;
}

console.log(isStrongPassword("PP1@nn1aaaa"));

//Bài 3:

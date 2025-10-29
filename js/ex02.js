// // Array: Là một dạng của Object. Dùng để lưu trữ một danh sách (Object truyền thống để lưu thông tin chi tiết vật thể)
// //Khai báo Array
// const myArr = ["Phương Anh", "Phương Anh", "Phương Anh", "An", "Dũng"];
// console.log(myArr.length); // 3 phần tử [0,1,2]
// console.log(myArr);

// //Có thể thêm bất kì kiểu dữ liệu nào vào Array, lộn xộn cũng được, số-chữ-obj-boolean,....
// // => trên thực tế chỉ thống nhất dùng 1 kiểu DL 1 mảng

// //Truy cập phần tử, thì cần có index;
// console.log(myArr[0]);

// //Cập nhật giá trị phần tử thì cũng cần xác nhận index
// // VD
// myArr[0] = "Vũ Anh";
// myArr[1] = "Tạ An";
// myArr[2] = "Quốc Dũng";
// console.log(myArr[0]);

// //Thêm 1 phần tử: Lấy index cao nhất + 1;
// //Length array = lastindex + 1;
// myArr[myArr.length] = "Bảo Trâm"; // Tự động thêm vào phần tử cuối cùng
// console.log(myArr);

// //Duyệt mảng => kiểm soát được mọi trường hợp
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// //For ... in; => cần dùng để duyệt từ đầu đến cuối
// // index là tên tự đặt ( đặt gì cũng được)
// for (let index in myArr) {
//   console.log(index);
// }

// //For of .... // chỉ lấy được value thôi // ít trường hợp cần sử dụng
// for (let value of myArr) {
//   console.log(value);
// }

// //VD: Tính tổng số chẵn trong mảng
// function sumArr(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     if (number % 2 === 0) sum += number;
//   }
//   return sum;
// }

// console.log(sumArr([5, 2, 8, 7, -3, -6]));

// // Xóa phần tử trong mảng (Tạo một mảng mới);
// let indexDelete = 2;
// const newArr = [];
// for (index in myArr) {
//   //+index : ép kiểu index về Number
//   if (indexDelete === +index) {
//     //continue: bỏ qua phần tử có index = 2
//     continue;
//   }

//   newArr[newArr.length] = myArr[index];
// }

// console.log(newArr);

// //Tìm số lớn nhất trong mảng

// function swap(numbers) {
//   console.log(numbers);

//   let max = numbers[0];
//   let indexOfMax = 0;
//   for (let number in numbers) {
//     // Tìm ra index và giá trị của phần tử lớn nhất
//     if (max < numbers[number]) {
//       max = numbers[number];
//       indexOfMax = number;
//     }
//   }

//   //số lớn nhất <-> (đổi chỗ với số cuối cùng)
//   numbers[indexOfMax] = numbers[0];

//   // số cuối cùng <-> đổi chỗ với số lớn nhất
//   numbers[0] = max;

//   // trả về mảng
//   return numbers;
// }

// // Thay đổi vị trí thì luôn cần lấy ra index của phần tử đó
// console.log(swap([5, 2, 8, 7, 100, -6]));

// Bài tập
// const myUser = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// let newMyUser = [];

// for (let index in myUser) {
//   //Kiểm tra mảng mới đã có myUser[index] chưa
//   let isValid = true;
//   for (let user of newMyUser) {
//     if (user === myUser[index]) {
//       isValid = false;
//       break;
//     }
//   }

//   //Nếu không có ---> thêm
//   if (isValid) {
//     newMyUser[newMyUser.length] = myUser[index];
//   }
// }

// console.log(newMyUser);

// Buổi sau: Học về các phương thức của mảng

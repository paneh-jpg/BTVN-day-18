console.log("Hello Word!");

// Bài 1:
const arr = [1, 2, 3, 4, 5, 6];

const getSquareOfNum = (arr) => {
  let newArr = [];
  for (let num of arr) {
    newArr[newArr.length] = num ** 2;
  }
  return newArr;
};
console.log(getSquareOfNum(arr)); //(6) [1, 4, 9, 16, 25, 36]

const getEvenNum = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (num % 2 === 0) newArr[newArr.length] = num;
  }
  return newArr;
};
console.log(getEvenNum(arr)); //(3) [2, 4, 6]

const getSquareOfOddNum = (arr) => {
  let newArr = [];
  for (let num of arr) {
    if (num % 2 !== 0) newArr[newArr.length] = num ** 2;
  }
  return newArr;
};
console.log(getSquareOfOddNum(arr)); //(3) [1, 9, 25]

//Bài 2

const names = [" hoang ", "AN", " f8 ", "Education"];

function transformArray(arr, callback) {
  let newArr = [];
  for (let name of arr) {
    newArr[newArr.length] = callback(name);
  }
  return newArr;
}
function toCleanLowerString(name) {
  return name.trim().toLowerCase();
}
function capitalizeFirst(name) {
  name = toCleanLowerString(name);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(transformArray(names, toCleanLowerString));
//(4) ['hoang', 'an', 'f8', 'education']

console.log(transformArray(names, capitalizeFirst));
//(4) ['Hoang', 'An', 'F8', 'Education']

//Bài 3:
const nums = [3, 7, 2, 9, 12, 15, 18];
function getNumGreaterThan10(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num >= 10) {
      newArr[newArr.length] = num;
    }
  }
  return newArr;
}
console.log(getNumGreaterThan10(nums));

function getNumbersDivisibleBy3(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num % 3 === 0) newArr[newArr.length] = num;
  }
  return newArr;
}
console.log(getNumbersDivisibleBy3(getNumGreaterThan10(nums)));

function getDoubleOddNumbers(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      newArr[newArr.length] = num * 2;
    }
  }
  return newArr;
}
console.log(getDoubleOddNumbers(nums));

//Bài 4:
const words = ["javascript", "php", "css", "html", "python", "java"];

function filterLongWords(arr) {
  let newArr = [];
  for (let word of arr) {
    if (word.length >= 5) {
      newArr[newArr.length] = word;
    }
  }
  return newArr;
}
console.log(filterLongWords(words));

//Sử dụng lại function transformArray() ở bài 2
function toUpperCaseWords(word) {
  return word.toUpperCase();
}
console.log(transformArray(words, toUpperCaseWords));

//Sử dụng lại function transformArray() ở bài 2
function reverseString(word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord;
}

console.log(transformArray(words, reverseString));

//1
const getRandomArray = (length, min, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}
console.log(`Random array: ${getRandomArray(10, 2, 20)}`);


//3
const getAverage = (...numbers) => {
  let arr = [];
  let counter = 0;
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      arr.push(element);
      counter += element;
    }
  });
  return (counter / arr.length);
};

console.log(`Average: ${getAverage(1,2,3,4,5,6,7,8,9)}`);

//4 
const getMedian = (...numbers) => {
  const arr = numbers.filter(item => Number.isInteger(item)).sort((a, b) => a - b);
  if (arr.length % 2) {
    return arr[(arr.length - 1) / 2];
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
};

console.log(`Median: ${getMedian(1, 2, 3, 4, 5, 5.5, 6.6)}`);

//5 
const filterEvenNumbers = (...numbers) => {
  let arrayWithoutEvenNumbers = [];
  numbers.forEach((element) => {
    if (Number.isInteger(element) && element % 2 !== 0) {
      arrayWithoutEvenNumbers.push(element);
    }
  });
  return arrayWithoutEvenNumbers;
};

console.log(`Not even numbers: ${filterEvenNumbers(1,2,3,4,5,6)}`);

//6
const countPositiveNumbers = (...numbers) => {
  let counter = 0;
  numbers.forEach((element) => {
    if (element > 0) {
      counter++;
    }
  });
  return counter;
};

console.log(`Number of positive numbers: ${countPositiveNumbers(-1,1,-2,2,-3,3)}`);

//7
const getDividedByFive = (...numbers) => {
  let arrDividedByFive = [];
  numbers.forEach((element) => {
    if (element % 5 === 0 && element !== 0) {
      arrDividedByFive.push(element);
    }
  });
  return arrDividedByFive;
};

console.log(`Numbers divisible by 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
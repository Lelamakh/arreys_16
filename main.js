// Array - მასივი

const myElements = [10, 15, 20, 25, 30];
const firstElement = 10;
const secondElement = 15;
const thirdElement = 20;
const fourthElement = 25;
const fifthElement = 30;
const myElementsLength = myElements.length;
const sum =
  fifthElement + secondElement + thirdElement + fourthElement + fifthElement;
const mean = sum / myElementsLength;

console.table(myElements);
console.log("sum of the elemenets" + "=" + sum);
console.log("mean" + "=" + mean);

// const myThirdElement = myElements[2];
// console.table(myThirdElement);

// myElements.push(35);
// console.table(myElements);

// const removedElement = myElements.pop();
// console.log(removedElement);

// object- ობიექტები

const myBookInfo = {
  title: "The Eighth Life",
  author: "Nino Kharatishvili",
  yearPublished: 2014,
};
console.table(myBookInfo);

// const fullSentence =
//   title + "by" + author + "was published in" + yearPublished + ".";

// console.log(fullSentence);

// edited yearPublished

myBookInfo.yearPublished = 2018;
console.table(myBookInfo);

// properties

// Array - მასივი

const myElements = [10, 15, 20, 25, 30];
console.table(myElements);

const myElementsLength = myElements.length;
console.log(myElementsLength);

const myThirdElement = myElements[2];
console.table(myThirdElement);

myElements.push(35);
console.table(myElements);

const removedElement = myElements.pop();
console.log(removedElement);

// object- ობიექტები

const myBookInfo = {
  title: "The Eighth Life",
  author: "Nino Kharatishvili",
  yearPublished: 2014,
};
console.table(myBookInfo);

// edited yearPublished

myBookInfo.yearPublished = 2018;
console.table(myBookInfo);

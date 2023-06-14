function findSumArray(arr){
 let sum=0;
 for (var i=0;i<arr.length;i++){
   const index1=i;
   // console.log(index1);
   const element=arr[index1];
   sum=sum+element;
  //  console.log(sum)
 }
 return sum; 
}

// const arr=[22,44,66];
// findSumArray(arr);


function getEvenNumbers(array){
 const arrayEven=[];
 for (let i=0;i<array.length;i++){
  const index=i;
  // console.log(index);
  const element=array[index];
  // console.log(index,element);
  if(element%2==0){
   arrayEven.push(element);
  }
 }
return arrayEven;
}

const arrayNums=[11,22,33,44,55,66];
const inputArray=getEvenNumbers(arrayNums);
// findSumArray(arr);
console.log(inputArray);
const finalRes=findSumArray(inputArray)
console.log(finalRes)
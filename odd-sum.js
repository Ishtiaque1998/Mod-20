function getSumArray(arr){
 let sum=0;
 for (var i=0;i<arr.length;i++){
  const index=i;
  const element=arr[index];
  sum=sum+element;
  // console.log(sum)
 }

 return sum;

}

// const arr=[1,2,3,4,5,6];
// const result=getSumArray(arr);
// console.log(result)



function getTheOdd(arr){
 const oddNUmbers=[];
 for (var i=0;i<arr.length;i++){
  const index=i;
  const element=arr[index];
 if(element%2!==0){
  //  console.log(index,element);
   oddNUmbers.push(element);
 }
 }
 return oddNUmbers;
}

const array=[1,2,3,4,5,6];
const resultOdd=getTheOdd(array);
console.log(resultOdd );
const finalRes= getSumArray(resultOdd);
console.log(finalRes)

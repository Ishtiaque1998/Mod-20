function getOddNumbers(array){
 const arrayOddNumbers=[];
 for(var i=0;i<array.length;i++){
  const index=i;
  const element=array[index];
  if(element%2!==0){
   arrayOddNumbers.push(element);
   }
  // console.log(arrayOddNumbers)
  
 }
 return arrayOddNumbers
 
}


function getSum(array){
 let sum=0;
 for(var i=0;i<array.length;i++){
  const index1=i;
  const element1=array[index1]; 
  sum=sum+element1;
 }
 return sum;
}

const array=[10,21,30,41,50];
const arrayOddNums=getOddNumbers(array);
console.log(arrayOddNums);
const arraySum=getSum(arrayOddNums);
console.log(arraySum)
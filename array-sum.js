function getSum(numbers){
 // console.log(numbers)
 let sum=0;

 for (var i=0;i< numbers.length;i++){
    const index=i;
    const element=numbers[index];
    sum=sum+element;
    // console.log(index,element,sum);
    
 }
 return sum;
}


const myNumbers=[12,34,56,76,89];
const res=getSum(myNumbers);
console.log(res);










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

const arr=[1,2,3,4,5,6];
const result=getSumArray(arr);
console.log(result)

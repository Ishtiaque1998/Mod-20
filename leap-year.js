function leapYear(year){
 if(year%4==0 && year%100!==0 &&year%400===0){
  return'leap year'
 }
 else{
  return 'not leap year'
 }
}

const input=2100;
const result=leapYear(input);
console.log(result);
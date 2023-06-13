function leapYear(year){
 if(year%4==0){
  return'leap year'
 }
 else{
  return 'not leap year'
 }
}

const input=2080;
const result=leapYear(input);
console.log(result);
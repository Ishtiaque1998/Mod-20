function milesToKilometer(miles){
 const kilometer=miles*1.60934;
 return kilometer;
}

const distanceInput=90;
const distanceOutput=milesToKilometer(distanceInput);
console.log(distanceOutput)
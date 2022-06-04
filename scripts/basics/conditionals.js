/*let cgpa=9.0
let yop=2015
if(cgpa>=8.5&&(yop===2020||yop===2021)){
    console.log("the student is eligible")
}
else if(cgpa>=9.0&&yop<=2020){
console.log("relaxation category - student is eligible")
}
else{
    console.log("the student is not eligible")
}
let age=25
let bp=false
let sugar=false
let mc=false
if(age>=18&&age<=75){
   if(bp===false&&sugar===false){
      if(mc){
        console.log("medical conditions-Not eligible")
      }
      else{
          console.log("Please Register for vaccination drive - Eligbile")
      }
   }
   else{
       console.log("Bp/Sugar - not eligible")
   }
}
else{
    console.log("Age is below 18 or above 75 - noteligible")
}*/
let m1=70
let m2=85
let m3=80
let avg=(m1+m2+m3)/3
console.log(avg)
//s grade - >=90 and <=100
//a grade - >=80 and <90

if(avg>=90&&avg<=100){
    console.log("S grade")
}
else if(avg>=80&&avg<90){
    console.log("A grade")
}
else if (avg>=70&&avg<80){
    console.log(" Bgrade")
}
else{
    console.log("fail")
}


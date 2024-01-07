// // const str ="sabir khan jamil khan";
// //  let name1=str.split(" ")
// //  .map(function(val){
// //     return val.split("").reverse().join("")
    
// // }

// // )
// // // console.log(name1.join(" "));

// // function array(elem){

// //      return Array.isArray(elem)

// // }
// // console.log(array([]))
// // console.log(array({}))
// // let a=[10,20,30,40]
// //  let b=a;
// // for(i=0;a.length>3; i++){
// //   const number=21;
// //   if(number%5 ===0)
// //   {
// //     console.log("numbr is integer");
// //   }
// //   else{
// //     console.log("! integer")
// //   }
// //   console.log(typeof(number))
// //  function duplicat(a)
// //  {
// //     return a.concat(a)
// //  }
// //   console.log(duplicat([1,2,3,4,5]))
// // while(a.length>0)
// // {
// //     a.pop()
// // }
// // console.log(a)

// //  console.log(a.length,[0])
// // a.splice(0,a.length);
// const arr=[10,20,30,40,50]

// // const arr1=[10,70,80]
// // arr.forEach((val)=>{
// //   arr1.push(val)


// // })
// // document.write(arr1)
// const student=[
//    { name:"sabir",cource:"bca",age:23,city:"kasoda"},
//    { name:"juber",cource:"mca",age:24,city:"jalgaon"},
//    { name:"sadik",cource:"mba",age:25,city:"pune"},
//    { name:"shakil",cource:"bca",age:27,city:"dhule"},
//    { name:"sahil",cource:"hsc",age:20,city:"nashik"}
// ]
// // // let a=[]
// // // student.forEach((val)=>{
// // //    if(val.age>=27 ){
// // //       a.push(val.age)
      
// // //    }
// // // })
// // // console.log(a)
// // // const data=student.map((val)=>{

// // //    return `${val.name}`;
// // // })
// // // document.write(data)
// // const data=student.filter((val)=>{

// //       return val.city==="kasoda" && val.city==="jalgaon"
// // })
// // console.log(data)
// // const list=[10,2,4,6,3,8,9,7,6,0,99,77,44,88]
// // const n=list.filter((val)=>{
// //    return val %3==0
// // })
// // console.log(n)
// // const max=26
// let add="kasoda";
// let jama=24;
// const s=student.filter((val)=>{
//    // return val.age >max
//    return val.city===add && val.age > jama;

// })
// console.log(s)
const random=()=>{

   const ran=Math.floor(Math.random() *16777255)
   const code= "#" + ran.toString(16)
   document.body.style.backgroundColor=code;


}
document.getElementById("btn").addEventListener("click",random)
 
random()
// https://www.jianshu.com/p/ad3750e8db26
// let a = {name:"phoeny",age:25,likes:['math','music','sports']}

// //深拷贝

// 1.JSON.parse(JSON.stringify())  
// let b = JSON.parse(JSON.stringify(a))
// b.name = 'book'
// b.likes.push('read')
// console.log('a:',a)
// console.log('b:',b)

//缺点：不能处理函数
// let c = {name:"phoeny",age:25,likes:['math','music','sports'],pets:{dog:{name:'ww',age:3},cat:{name:'mm',age:1}},sayName(){console.log('hello')}}
// let d = JSON.parse(JSON.stringify(c))
// console.log('c:',c)
// console.log('d:',d)

//缺点：不能包含循环引用
// let pheony = {name:"phoeny",age:25,likes:['math','music','sports'],sayName(){console.log('hello')}}
// pheony.friend = pheony
// let pheonyCopy = JSON.parse(JSON.stringify(pheony))
// console.log(pheonyCopy)

//2.lodash _.cloneDeep(object)

//3.手写深拷贝（递归）
// let data = {name:"phoeny",age:25,likes:['math','music','sports'],pets:{dog:{name:'ww',age:3},cat:{name:'mm',age:1}},sayName(){console.log('hello')}}

//第一版
// function cloneDeep1(data){
//   let copy
//   if(Array.isArray(data)){
//     copy = []
//     data.forEach(item=>{
//       if(typeof item == 'object' || typeof value =='function'){
//         copy.push(cloneDeep1(item))
//       }else{
//         copy.push(item)
//       }
//     })
//   }else if(typeof data == 'object' || typeof data == 'function'){
//     copy = {}
//     for(const [key,value] of Object.entries(data)){
//       if(typeof value == 'object' || typeof value == 'function'){
//         copy[key] = cloneDeep1(value)
//       }else{
//         copy[key] = value
//       }
//     }
//   }
//   return copy
// }
// //第二版：合并统一代码
// function cloneDeep2(data){
//   let copy
//   if(Array.isArray(data)){
//     copy = []
//   }else if(typeof data == 'object' || typeof data == 'function'){
//     copy = {}
//   }
//   for(const [key,value] of Object.entries(data)){
//     if(typeof value == 'object' || typeof value == 'function'){
//       copy[key] = cloneDeep2(value)
//     }else{
//       copy[key] = value
//     }
//   }
//   return copy
// }
// //第三版：提出公共方法  使用三目运算符取代if
function isObj(data){
    return (typeof data == 'object' || typeof data == 'function')
}
// function cloneDeep3(data){
//   let copy = Array.isArray(data) ? [] : {}
//   for(const [key,value] of Object.entries(data)){
//     copy[key] = isObj(value) ? cloneDeep3(value) : value
//   }
//   return copy
// }

// //缺点：不能处理函数 eval:sayName(){}形式会出错
// let data1 = {name:"phoeny",age:25,likes:['math','music','sports'],pets:{dog:{name:'ww',age:3},cat:{name:'mm',age:1}},sayName:function(){console.log('hello')}}
// function cloneDeep4(data){
// let copy = Array.isArray(data) ? [] : {}
// for(const [key,value] of Object.entries(data)){
//   if(typeof value == 'object'){
//     copy[key] = cloneDeep4(value)
//   }else if(typeof value == 'function'){
//     copy[key] = eval('(' + value.toString() + ')')
//   }else{
//     copy[key] = value
//   }
// }
// return copy
// }

// let copy = cloneDeep4(data1)
// console.log(copy)
// copy.name = 'book'
// copy.likes.push('paint')
// copy.pets.dog.name= 'oo'
// copy.sayName = function sayName(){console.log('hello copy')}
// console.log("原件————————————————————————————————————————")
// console.log(data)
// data.sayName()
// console.log("复印件————————————————————————————————————————")
// console.log(copy)
// copy.sayName()

//缺点：不能包含循环引用 用weakMap去存储已经拷贝过的值
function cloneDeep5(data){
  let copy = Array.isArray(data) ? [] : {}
  for(const [key,value] of Object.entries(data)){
    if(typeof value == 'object'){
      copy[key] = cloneDeep4(value)
    }else if(typeof value == 'function'){
      copy[key] = eval('(' + value.toString() + ')')
    }else{
      copy[key] = value
    }
  }
  return copy
  }

let pheony = {name:"phoeny",age:25,likes:['math','music','sports'],sayName:function(){console.log('hello')}}
pheony.friend = pheony
let copy = cloneDeep5(pheony)
console.log(copy)
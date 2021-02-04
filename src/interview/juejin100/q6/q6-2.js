// let a = {name:"phoeny",age:25,likes:['math','music','sports']}

// //深拷贝

// 1.JSON.parse(JSON.stringify())  
// let b = JSON.parse(JSON.stringify(a))
// b.name = 'book'
// b.likes.push('read')
// console.log('a:',a)
// console.log('b:',b)
//缺点：不能处理函数
let c = {name:"phoeny",age:25,likes:['math','music','sports'],sayName(){console.log('hello')}}
let d = JSON.parse(JSON.stringify(c))
console.log('c:',c)
console.log('d:',d)

//2.lodash _.cloneDeep(object)

//3.手写深拷贝（递归）
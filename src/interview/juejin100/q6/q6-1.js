// https://www.cnblogs.com/jsunwang/p/13410952.html
let a = {name:"phoeny",age:25,likes:['math','music','sports']}

//浅拷贝
// 1.Object.assign()
// let b = Object.assign({},a)
// b.name = 'book'
// b.likes.push('read')
// console.log('a:',a)
// console.log('b:',b)

//2.仅适应于数组：Array.prototype.concat()和Array.prototype.slice()都不会修改原数组，而是会返回一个对原数组进行浅拷贝的新数组

//3.lodash _.clone(object)
 
//4.自己实现浅拷贝 一层遍历赋值即可
function lightCopy(data){
  let copy = {}
  for(const [key,value] of Object.entries(data)){
    copy[key] = value
  }
  return copy
}

let b = lightCopy(a)
b.name = 'book'
b.likes.push('read')
console.log('a:',a)
console.log('b:',b)


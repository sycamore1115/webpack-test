/**
 * 正则表达式：
 * 用于RegExp的exec和test方法，String的match,matchAll,replace,search,split方法
 */

/**
 * exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
 */
// 在设置了 global 或 sticky 标志位的情况下（如 /foo/g or /foo/y），JavaScript RegExp 对象是有状态的。
// 他们会将上次成功匹配后的位置记录在 lastIndex 属性中。
// 使用此特性，exec() 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， String.prototype.match() 只会返回匹配到的结果。
let test1 = "fgjhgdk42gh34jhs";
let reg1 = /\d+/g

console.log(test1.match(reg1))
console.log(reg1.lastIndex)

console.log(reg1.exec(test1))
console.log(reg1.lastIndex)

console.log(reg1.exec(test1))
console.log(reg1.lastIndex)

console.log("______________________________________")
 
 /**
  *  match() 方法检索返回一个字符串匹配正则表达式的结果。
  */
 //如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
// 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 
let test2 = "fgjhgdk42gh34jhs";
let reg2 = /(\d+)\w/g
console.log(test2.match(reg2))

/**
 * matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
 */
console.log([...test2.matchAll(reg2)])

//如果正则表达式不包含 g 标志，str.match() str.matchAll() 将返回与 RegExp.exec() 相同的结果
console.log("______________________________________")

/**
 * replace() 方法返回替换后的新字符串。原字符串不会改变。
 */
//在进行全局的搜索替换时，正则表达式需包含 g 标志。
let test3 = "fgjhgd,k42,gh34,jh,s";
let reg3 = /(\d+),/
console.log(test3.replace(reg3,'*'))


console.log("______________________________________")
/**
 * test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
 */
/**
 * search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。返回索引（如果找到）或者-1（如果没找到）
 */


 let aa = 'https://www.baidu.com/s?ie=UTF-8&wd=js%E6%AD%A3%E5%88%99%E4%B9%A0%E9%A2%98'
 let re = /(\?|&)(.+)=(.+)/g
 console.log(aa.match(re))
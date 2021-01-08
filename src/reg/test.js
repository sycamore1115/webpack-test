
/**
 * 正则表达式的两种构建方式
 */
//1.使用正则表达式字面量,正则表达式保持不变时，使用此方法可获得更好的性能。
let re1 = /ab+c/
//2.调用RegExp对象的构造函数,如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。
let re2 = new RegExp("ab+a")

/**
 * 7个常用元字符，可分两组记忆
 */
//第一组：
// . 匹配除换行符以外的任意字符
// \w 匹配字母，数字，下划线，汉字 (\W)
// \s 匹配任意空白符 (\S)
// \d 匹配数字,等价于[0-9]  (\D)
//第二组:
// ^ 匹配一个词的开始 (当 '^' 作为第一个字符出现在一个字符集合模式时，它将会有不同的含义)
// $ 匹配一个词的结束
// \b 匹配一个词的边界 (\B)

/**
 * 重复限定符
 */
//1. * 0 n 等价于 {0,}
//2. + 1 n 等价于 {1,}
//3. ? 0 1 等价于 {0,1}
//{n}  {n,}  {n,m}

//分组 () 

//转义 \

//条件或 |

//区间  []

/**
 * 零宽断言
 * 1.x(?=y)
 * 2.(?<=y)x
 * 3.x(?!y)
 * 4.(?<!y)x
 */
// let test1 = "<span class=\"read-count\">阅读数：641</span>";
// let reg1 = /(?<=阅读数：)\d+/
// console.log(test1.match(reg1)[0])

// /**
//  * 捕获和非捕获 结合分组 (x)和(?:x)
//  */
// let test2 = "020-85653333";
// let reg2 = /(?:0\d{2})-(\d{8})/
// console.log(test2.match(reg2))

// let test21 = "Phoeny wu";
// let reg21 = /(?<lastName>\w+) (?<firstName>\w+)/
// console.log(test21.match(reg21).groups.lastName)

// //获取到的 groups: [Object: null prototype] { lastName: 'Phoeny', firstName: 'wu' }  不仅能在正则表达式外部使用，还可以在内部使用
// console.log("________________________________________")
// /**
//  * 反向引用 捕获组通常是和反向引用一起使用的
//  */
// //例：查找一串字母"aabbbbgbddesddfiid"里成对的字母
// let test3 = "aabbbbgbddesddfiid";
// let reg3 = /(\w)\1/g
// console.log([...test3.match(reg3)])
// let reg31 = /(\w)\1\1/g
// console.log([...test3.match(reg31)])

// let test32 = "abcbbabcbcgbddesddfiid";
// let reg32 = /(a)bc/g;
// console.log(test32.replace(reg32,'$1'))

// console.log("________________________________________")
/**
 * 贪婪和非贪婪
 */
let test4="61762828 176 2991 87321"
let reg4=/(\d{1,2})(\d{3,4})/g;
// console.log([...test4.matchAll(reg4)])
let reg41=/(\d{1,2}?)(\d{3,4})/g;
console.log([...test4.matchAll(reg41)])



/**
 * 通过标志进行高级搜索
 */
const data = {
    name: 'a',
    children: [
        { name: 'b', children: [{ name: 'e' },{ name: 'f' }] },
        { name: 'c', children: [{ name: 'g' }] },
        { name: 'd', children: [{ name: 'h' }] },
    ],
}

//深度遍历   [ 'a', 'b', 'e', 'f', 'c', 'g', 'd', 'h' ]
// let arr = []
// function deepTraversal1(data){
//   arr.push(data.name)
//   if(data.children){
//     for(let item of data.children){
//       // deepTraversal1(item)
//       arguments.callee(item)
//     }
//   }
//   return arr
// }
// console.log(deepTraversal1(data))

// function deepTraversal1(data,arr = []){
//   arr.push(data.name)
//   if(data.children){
//     for(let item of data.children){
//       deepTraversal1(item,arr)
//       // arguments.callee(item,arr)
//     }
//   }
//   return arr
// }
// console.log(deepTraversal1(data))


// let deepTraversal = function _deepTraversal(){
//   let arr = []
//   return function f(data){
//     arr.push(data.name)
//     if(data.children){
//       for(let item of data.children){
//         // arguments.callee(item)
//         f(item)
//       }
//     }
//     return arr
//   }
// }()
// console.log(deepTraversal(data))

//非递归 pop push 栈
// function deepTraversal2(data){
//   let stack = [],arr = []
//   stack.push(data)
//   while(stack.length){
//     let item = stack.pop()
//     arr.push(item.name)
//     if(item.children){
//       for(let i of item.children.reverse()){
//         stack.push(i)
//       }
//     }
//   }
//   return arr
// }
// console.log(deepTraversal2(data))

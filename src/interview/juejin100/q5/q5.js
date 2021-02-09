//深度优先遍历 

const { node } = require("webpack")

// const data = {
//     name: 'a',
//     children: [
//         { name: 'b', children: [{ name: 'e' },{ name: 'f' }] },
//         { name: 'c', children: [{ name: 'g' }] },
//         { name: 'd', children: [{ name: 'h' }] },
//     ],
// }
//深度优先遍历 
//1.递归
// let arr = []
// function deepTraversall(deepData){
//     arr.push(deepData.name)
//     if(deepData.children){
//         for(item of deepData.children){
//             arguments.callee(item)
//         }
//     }
// }
// deepTraversall(data)
// console.log(arr)

// function deepTraversall(deepData){
//     let arr = []
//     function inner(deepData){
//         arr.push(deepData.name)
//         if(deepData.children){
//             for(item of deepData.children){
//                 arguments.callee(item)
//             }
//         }
//     }
//     inner(deepData)
//     console.log(arr)
// }
// deepTraversall(data)

//2.非递归
const data = {
    name: 'a',
    children: [
        { name: 'b', children: [{ name: 'e' },{ name: 'f' }] },
        { name: 'c', children: [{ name: 'g' }] },
        { name: 'd', children: [{ name: 'h' }] },
    ],
}

function deepTraversall(data){
    let stack = []
    let res = []
    stack.push(data)
    while(stack.length){
       let item = stack.pop()
       res.push(item.name)
       if(item.children){
        for (let i = item.children.length - 1; i >= 0; i--) {
            stack.push(item.children[i])
       }
       }
    }
    console.log(res)
}
deepTraversall(data)

const data = {
  name: 'a',
  children: [
      { name: 'b', children: [{ name: 'e' },{ name: 'f' }] },
      { name: 'c', children: [{ name: 'g' }] },
      { name: 'd', children: [{ name: 'h' }] },
  ],
}

//广度遍历   [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//非递归 shift push 队列
function widthTraversal(data){
  let arr = [],line = []
  line.push(data)
  while(line.length){
    let item = line.shift()
    arr.push(item.name)
    if(item.children){
      for(let i of item.children){
        line.push(i)
      }
    }
  }
  return arr
}
console.log(widthTraversal(data))
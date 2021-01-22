// 广度优先遍历
const data = {
  name: 'a',
  children: [
      { name: 'b', children: [{ name: 'e' },{ name: 'f' }] },
      { name: 'c', children: [{ name: 'g' }] },
      { name: 'd', children: [{ name: 'h' }] },
  ],
}

function widthTraversal(data){
  let queue = []
  let res = []
  queue.push(data)
  while(queue.length){
    let item = queue.shift()
    res.push(item.name)
    if(item.children){
      for(i of item.children){
        queue.push(i)
      }
    }
  }
  console.log(res)
}

widthTraversal(data)
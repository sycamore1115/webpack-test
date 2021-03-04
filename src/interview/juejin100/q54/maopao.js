let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
//从小到大排序

//冒泡排序  相邻两个比较，大的往后排
for(let i = 0; i < arr.length; i++){
  for(let j = 0;j< arr.length-i-1; j++){
    if(arr[j]>arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
  }
}

console.log(arr)
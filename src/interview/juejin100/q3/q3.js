//防抖和节流
//1.防抖：触发一个事件之后，不会马上执行，而是过一段时间再执行，在此期间如果再次触发这个事件，则取消上一次触发，重新计算时间
//每次触发事件时都取消之前的延时调用方法
function debounce(){
  let timeout = null;
  return function(){
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      console.log('防抖')
    }, 500);
  }
}
//2.节流：
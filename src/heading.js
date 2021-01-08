export default() =>{
  const element = document.createElement('h2')
  element.textContent = 'Hello Webpack111'
  element.addEventListener('click',()=>alert('Hello webpack'))
  return element
}
const { sources } = require("webpack");
const marked = require('marked')

module.exports = source =>{
  const html = marked(source)
  return html; 
  // const code = `module.exports = ${JSON.stringify(html)}`
  // return code; 
}
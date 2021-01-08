import createHeader from './heading.js'
import about from './about.md'
import './style.css'

// 1234
const heading = createHeader()
document.body.append(heading)
console.log(about);
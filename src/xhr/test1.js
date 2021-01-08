//使用XMLHttpRequest发出HTTP请求，在网站和服务器之间交换数据
/**
 * 1.创建一个XMLHttpRequest对象
 * 2.打开一个URL
 * 3.发送该请求
 */
let xhr = new XMLHttpRequest()
//open的第三个参数决定是同步还是异步获取数据，默认为true即异步处理，传false将同步处理该过程
xhr.open("GET","http://www.example.org/example.txt")
xhr.send()
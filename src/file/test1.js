/**
 * iframe上传
 * ajax上传
 * 进度条
 * 文件预览
 * 拖放上传
 */
// FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据
let formData1 = new FormData()
// FormData 对象的字段类型可以是 Blob, File, 或者 string: 如果它的字段类型不是Blob也不是File，则会被转换成字符串类
formData.append('stringTest1','phoeny')
formData.append('stringTest2',123)

formData.append('fileTest',fileInputElement,files[0])

let content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
let blob = new Blob([content], { type: "text/xml"});
formData.append('blobTest',blob)

//通过html表单创建formdata对象
let formElement = document.querySelector('form')
let formData2 = new FormData(formElement)

let request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData1);
request.send(formData2);


// https://www.cnblogs.com/websharehome/p/13836338.html
// 1.Blob 对象表示一个不可变、原始数据的类文件对象。可以通俗的说，Blob就是一只读的二进制对象。
// 2.File对象是特殊类型的Blob
// Blob与ArrayBuffer
// 相同点： Blob和ArrayBuffer都是二进制的容器。
// ArrayBuffer：ArrayBuffer更底层，是一段纯粹的内存上的二进制数据，我们可以对其任何一个字节进行单独的修改，也可以根据我们的需要以我们指定的形式读取指定范围的数据。
// Blob：Blob就是将二进制数据做了一个封装，我们拿到的就是一个整体，可以看到它的整体属性大小、类型；可以对其分割，但看不到它内部的细节
// 联系：Blob可以接受一个ArrayBuffer作为参数生成一个Blob对象，此行为就相当于对ArrayBuffer数据做一个封装。
// 应用上的区别：由于ArrayBuffer和Blob的特性，Blob作为一个整体文件，适合用于文件传输；而只有需要关注细节（比如要修改某一段数据时），此时使用ArrayBuffer比较好。
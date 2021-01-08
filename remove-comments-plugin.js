class RemoveCommentsPlugin{
  //这个方法会在webpack启动时被调用
  //compiler是webpack工作过程中最核心的对象，包含了我们此次构建的所有配置信息，我们就是通过这个对象去注册钩子函数
  apply(compiler){
    //compilation是此次运行打包的上下文，所有打包产生的结果放在这
    compiler.hooks.emit.tap('RemoveCommentsPlugin',compilation=>{
      for(const name in compilation.assets){
        if(name.endsWith('.js')){
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g,'')
          compilation.assets[name] = {
            source:()=>noComments,
            size:()=>noComments.length
          }
        }
      }
    })
  }
}

module.exports = RemoveCommentsPlugin
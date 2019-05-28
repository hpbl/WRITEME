# avalon-server-render-example

avalon @abstr_number +koa @abstr_number 的后端渲染例子

npm install

npm start

* * *

后端渲染的流程

@abstr_number . 引入最新版 @abstr_hyperlink 这里用avalon.modern体积少些 @abstr_number . 引入avalon仓库下的serve下的文件 @abstr_hyperlink @abstr_number . 引入你定义VM的文件 (所有DOM操作要在回调里进行,不要出现 window, document, 方便能在nodejs环境中运行) 对你的VM使用webpack进行打包 (目的是处理module.exports, require) @abstr_number . 引入你该页面的模板 @abstr_number . 将VM与模板放进serveRender方法,得到一个对象,里面包含渲染好的HTML( **A** ) 及 一个包括所有模板的对象( **B** ) @abstr_number . 创建一个script标签, 里面定义一个`avalon.serverTemplates`对象, 将 **B** 对象赋给它 @abstr_number . 将上面的标签与A页面, 赋给ctx.body发往前端 

* * *

@abstr_code_section 

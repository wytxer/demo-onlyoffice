/* eslint-disable */

(function(window, undefined) {
  window.Asc.plugin.init = function(initData) {
    console.log('插件开始初始化')
    console.log(window)

    var me = this
    $('#addText').click(function() {
      me.callCommand(function() {
        try {
          // 获取文档对象
          var oDocument = Api.GetDocument()

          console.log('文档对象')
          console.log(oDocument)

          // 生成一个新的段落对象
          var oParagraph = Api.CreateParagraph()
          // 往段落里面添加一个字符串文本
          oParagraph.AddText('Hello world')
          // 最后往文档里面添加一个段落对象
          oDocument.Push(oParagraph)
        } catch (error) {
          console.error(error)
        }
      }, false, true, function () {
        console.log('操作成功')
      })
    })

    // 在插件 iframe 之外释放鼠标按钮时调用的函数
    window.Asc.plugin.onExternalMouseUp = function() {
      var event = document.createEvent('MouseEvents')
      event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null)
      document.dispatchEvent(event)
    }

    window.Asc.plugin.button = function(id) {
      // 被中断或关闭窗口
      if (id === -1) {
        this.executeCommand('close', '')
      }
	  }
  }
})(window, undefined)

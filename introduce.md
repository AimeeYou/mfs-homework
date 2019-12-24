# 一、visual studio code 快捷键说明

## 主命令框

F1 或 Ctrl+Shift+P : 打开命令面板。在打开的输入框内，可以输入任何命令，例如：

    * 按一下 Backspace 会进入到 Ctrl+P 模式
    * 在 Ctrl+P 下输入 > 可以进入 Ctrl+Shift+P 模式
    * 在 Ctrl+P 窗口下还可以:按一下 Backspace 会进入到 Ctrl+P 模式
    * 在 Ctrl+P 下输入 > 可以进入 Ctrl+Shift+P 模式

## 常用快捷键

### 编辑器与窗口管理

    * 打开一个新窗口：ctrl+shift+N
    * 关闭窗口：ctrl+shift+W
    * 同时打开多个编辑器（查看多个文件）
    * 新建文件 ctrl+N
    * 文件之间切换 ctrl+Tab
    * 切出一个新的编辑器（最多3个）ctrl+\，也可以按住ctrl鼠标点击explorer里的文件名
    * 左中右 3 个编辑器的快捷键 Ctrl+1 Ctrl+2 Ctrl+3
    * 3 个编辑器之间循环切换 Ctrl+
    * 编辑器换位置， Ctrl+k然后按Left或 Right

### 代码编辑

#### 格式调整

    * 代码行缩进: Ctrl+[ 、 Ctrl+]
    * Ctrl+C 、 Ctrl+V 复制或剪切当前行/当前选中内容
    * 代码格式化： Shift+Alt+F，或 Ctrl+Shift+P 后输入 format code
    * 上下移动一行： Alt+Up 或 Alt+Down
    * 向上向下复制一行： Shift+Alt+Up 或 Shift+Alt+Down
    * 在当前行下边插入一行: Ctrl+Enter
    * 在当前行上方插入一行 Ctrl+Shift+Enter

#### 光标相关

    * 移动到行首： Home
    * 移动到行尾： End
    * 移动到文件结尾： Ctrl+End
    * 移动到文件开头： Ctrl+Home
    * 移动到定义处： F12
    * 定义处缩略图：只看一眼而不跳转过去 Alt+F12
    *　移动到后半个括号： Ctrl+Shift+]
    *　选择从光标到行尾： Shift+End
    *　选择从行首到光标处： Shift+Home
    *　删除光标右侧的所有字： Ctrl+Delete
    *　扩展/缩小选取范围： Shift+Alt+Left 和 Shift+Alt+Right
    *　多行编辑(列编辑)：Alt+Shift+鼠标左键， Ctrl+Alt+Down/Up
    *　同时选中所有匹配： Ctrl+Shift+L
    *　Ctrl+D 下一个匹配的也被选中 (在 sublime 中是删除当前行，后面自定义快键键中，设置与 Ctrl+Shift+K 互换了)
    *　回退上一个光标操作： Ctrl+U
    *　选中所有匹配词批量编辑：鼠标高亮选中需要查找的词，按下 Ctrl + Shift + L键，即可快速选中当前文件中所有匹配的词，并在每一个词后面有一个编辑光标，可批量同步编辑
    *　折叠所有区域代码 Ctrl+K Ctrl+0(零)
    *　展开所有区域代码 Ctrl+K Ctrl+J
    *　打开当前文件所在目录 Ctrl+K R
 #### 重构代码

    *　找到所有的引用： Shift+F12
    *　同时修改本文件中所有匹配的： Ctrl+F12
    *　重命名：比如要修改一个方法名，可以选中后按 F2，输入新名字，回车，则所有该方法的引用也都同步更新了
    *　跳转到下一个 Error 或 Warning：当有多个错误时可以按 F8 逐个跳转
    *　查看 diff： 在 explorer 里选择文件右键 Set file tocompare，然后需要对比的文件上右键选择 Compare with file_name_you_chose
#### 查找替换

    *　查找 Ctrl+F
    *　查找替换 Ctrl+H
    *　整个文件夹中查找 Ctrl+Shift+F
#### 显示相关

    *　全屏：F11
    *　zoomIn/zoomOut：Ctrl +/-
    *　侧边栏显/隐： Ctrl+B
    *　显示资源管理器 Ctrl+Shift+E
    *　显示搜索 Ctrl+Shift+F
    *　显示 Git Ctrl+Shift+G
    *　显示 Debug Ctrl+Shift+D
    *　显示 Output Ctrl+Shift+U
#### 其他

    *　自动保存：File -> AutoSave，或者 Ctrl+Shift+P，输入 auto
# 二、visual　studio　code的插件安装与卸载
      进入扩展视图视图安装或卸载（快捷键Ctrl+shift+x）
# 三、　在visual studio code中使用　Git
## 1、vscode简介
    VSCode是微软推出的一款轻量编辑器，采取了和VS相同的UI界面，搭配合适的插件可以优化前端开发的体验。布局:左侧是用于展示所要编辑的所有文件和文件夹的文件管理器，依次是资源管理器，搜索，GIT，调试，插件，右侧是打开文件的编辑区域，最多可同时打开三个编辑区域到侧边。在初次使用时如果本地没有安装git会提示先安装git，然后重启vscode。
## 2、下载安装Git
## 3、配置git
  设置全局配置
    * git config --global user.name "your name" 
    * git config --global user.email "your email"
  进入你的项目目录
    * cd d:/wamp/www/wap //首先指定到你的项目目录下 
    * git init touch README.md 
    *　git add README.md 
    *　git commit -m "first commit" 
    *　git remote add origin https://github.com/youtname/vscode.git 
    //用你仓库的url,vscode.git中vscode为仓库名称,使用时必须先创建 
    *　git push -u origin master //提交到你的仓库

## 4、在visual studio code中使用git
    具体可参照下面给出的网址进行操作
    
    [如何在VSCode中使用Git](https://blog.csdn.net/sacredness/article/details/89179435)
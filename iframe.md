# 问答题

1. 什么是 iframe?

iframe 也是html的一个标签，不过不是往页面上添加一个元素那么简单，iframe 会创建包含另外一个文档的内联框架
2. 如何在当前页面中嵌入其他页面？
* 通过iframe。
* frameset和frame结合。
3. iframe 有哪些常见应用？
* 插入广告
* 实现简单的局部刷新
4. 如何使用 a标签控制 iframe 中显示的内容？
将<a>标签的target属性设置为iframe的name。
5. 为什么越来越少的人使用 iframe？

* iframe广泛的被用于在网页中插入广告，所以很多网站或者插件都通过删除iframe来屏蔽广告，导致用iframe编写的网页无法正常显示。
* iframe本身有一些功能不完善，用户体验变差。
* javascript的优秀性能和广泛使用
上述三点结合使得使用iframe的人越来越少。

6. frame 和 iframe 有什么区别？
* frame不能脱离frameSet单独使用，iframe可以。
* frame不能放在body中,否则不能正常显示。
* frame的高度只能通过frameSet控制；iframe可以自己控制，不能通过frameSet控制。

# 代码题
请实现一个类似 gitbook 的左边点击右边局部刷新的效果
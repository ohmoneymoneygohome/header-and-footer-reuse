# header-and-footer-reuse<br>
只引入一个js文件实现头部和底部复用（原生js）<br>
实现原理：<br>
查找到body标签，在body标签的最前和最后插入头部和底部的<br>
优势：<br>
只通过引入一条js文件就实现网站头部和底部复用，相比与angular路由，php的include，react的封装组件，jquery 的load方法，后台的方法，这种方法极为简便，只需要加载一条js文件，且不存在异步加载等问题，<br>
使用方法：<br>
在<body></body>引入headandfoot.js<br>
将头部和底部文件粘贴在headandfoot.js指定位置。<br>
引入所需的头部和底部CSS样式。<br>
注意事项<br>
1字符串拼接问题<br>
头部和底部html代码较长，用append方法插入需要进行字符串拼接<br>，
headandfoot.js中已对这一问题做了处理，只需要将头部和底部文件粘贴在指定位置即可<br>
2引入位置问题<br>
在body标签内引入这个headandfoot.js文件，而不是在head里引用，否则无法获取到body标签<br>
3不同页面版块头部样式差异<br>
导航中不同页面的导航标签背景色可能不一样，建议在页面内使用<style></style>写入需要在特定页面展示的样式<br>

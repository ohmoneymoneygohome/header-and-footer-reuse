/**
 * Created by Administrator on 2016/12/16.
 */
setHeadAndFoot();
//在/**/之间此拷贝头部html；------------head-----------html元素前后请勿有换行或空格
//在/**/之间此拷贝底部html；------------foot-----------html元素前后请勿有换行或空格
//在html页面的<body></body>中引入本文件;
function setHeadAndFoot(){
    function joinText(fn) {
        return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
    }
    var publichead=joinText(
        function(){/*
         <div id="header">
         <!-- header beginning -->
         <header>
         <div class="width1 bgc-nav">
         <div class="container">
         <nav class="navbar navbar-default">
         <div class="container-fluid">
         <!-- Brand and toggle get grouped for better mobile display -->
         <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="../index.html"><img src="img/logo.png" alt=""></a>
         </div>
         <!-- Collect the nav links, forms, and other content for toggling -->
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul class="nav navbar-nav navbar-right">
         <li><a href="../index.html">首页</a></li>
         <li class="navService"><a href="../u-service/service.html">平台超</a></li>
         <li class="navPublic"><a href="../u-public/public.html">公共超</a></li>
         <li class="navFortune"><a href="../u-fortune/fortune.html">财富超</a></li>
		 <li class="navNews">
			 <a href="../u-news/news.html">新闻岛</a>
         </li>
         <li class="navDate"><a href="#">数据岛</a></li>
         <li class="log-in">
			 <a href="../u-login/log.html">登录</a>|
			 <a href="../u-login/log.html#/Register">注册</a>
         </li>
         </ul>

         </div><!-- /.navbar-collapse -->

         </div><!-- /.container-fluid -->
         </nav>
         </div>
         </div>
         </header>
         <!-- header ending -->
         </div>
         */}//在/**/之间此拷贝头部html；------------head-----------
    );
    var publicfoot=joinText(
        function(){/*
         <div id="footer">
         <!-- footer beginning -->
         <footer>
         <div class="container">
         <div class="row">
         <div class="col-md-8">
         <div class="media">
         <a class="media-left" href="#">
         <img src="img/logo.png" alt="优房超LOGO">
         </a>
         <div class="media-body">
         <ul class="list-inline">
         <li><a href="#">关于我们</a></li>
         <li><a href="#">人才招聘</a></li>
         <li><a href="#">联系我们</a></li>
         <li><a href="#">用户协议</a></li>
         <li><a href="#">友情链接</a></li>
         <li><a href="#">网址地图</a></li>
         </ul>
         <p>
         客服热线：
         <span>400-800-8820</span>
         （工作时间：<time data="9:00">9:00</time>-<time data="21:00">21:00</time>）
         </p>
         </div>
         </div>
         <div class="copyright">
         版权所有 &copy; 深圳市城市屋超科技有限公司 copyr &copy; 2016 apyfc.com
         All Rights Rights  Reserved   备案号:粤ICP备16079781号
         </div>
         </div>
         <div class="col-md-4">
         <div class="row">
         <div class="col-md-4">
         <div class="thumbnail">
         <img src="img/QRcode.png" alt="...">
         <div class="caption">
         关注优房超微博
         </div>
         </div>
         </div>
         <div class="col-md-4">
         <div class="thumbnail">
         <img src="img/QRcode.png" alt="...">
         <div class="caption">
         关注优房超微信号
         </div>
         </div>
         </div>
         <div class="col-md-4">
         <div class="thumbnail">
         <img src="img/QRcode.png" alt="...">
         <div class="caption">
         下载优房超 APP
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </footer>
         <!-- footer ending -->
         </div>
         */}//在/**/之间此拷贝底部html；------------foot-----------
    );//将头部和底部html进行多行字符串拼接；------1-------
    var newPublicHead=document.createElement("div");
    var newPublicFoot=document.createElement("div");
    newPublicHead.innerHTML=publichead;
    newPublicFoot.innerHTML=publicfoot;
    var htmlBox=document.getElementsByTagName("html")[0];
    var bodyBox=htmlBox.children[1];//创建头部和底部元素
    if(bodyBox.children[0] ){
        bodyBox.insertBefore(newPublicHead,bodyBox.children[0]);
    }else{

        bodyBox.appendChild(newPublicHead);

    }//将头部插入到body所有子元素之前（兼容ie；）
    bodyBox.appendChild(newPublicFoot);//插入底部；------2-----------
}//html元素前后请勿有换行或空格；

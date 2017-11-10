// 该文件的功能是用来写首页的js交互的
//1.进度条
//不让进度条显示圆圈
NProgress.configure({showSpinner:false});
//当页面中发起一个ajax请求时，让进度条开始
$(window).ajaxStart(function(){
    NProgress.start();
})
//当ajax请求完成的时候，让进度条完成
$(window).ajaxComplete(function(){
    NProgress.done();
})

//2.功能实现
//点击左侧的菜单按钮，让左侧的侧边栏消失，让右侧的内容占满全屏
$('[data-menu]').on('click',function(){
    $('.lt-aside').toggle();
    $('.lt-section').toggleClass('menu');
})
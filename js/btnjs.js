$(function () {
	$(".down_btn").click(function () {
        var h = $("#starss").height();
        $("body").css("overflow","visible");
        $("html").css("overflow","visible");
        $('body,html').animate({ scrollTop: h-57},1000,function () {
            $("#starss").css("display","none");
            $("#women").css("display","block");
            $("#imgball").css("display","block");
            $("#talk").css("display","block");
            $("#bgm").css("autostart","true");
        });
   });
   $("#cattalk").click(function () {
   		$("#chatball5").css("display","none");
   		$("#chatball6").css("display","none");
   		$("#chatball7").css("display","block");
   		$("#chatball8").css("display","block");
   });
   $("#single_direc").click(function () {
   		$("#single_kiss").css("display","block");
   });
   $(".down_btn1").click(function () {
        var h = $("#starss").height();
        $("body").css("overflow","visible");
        $("html").css("overflow","visible");
        $('body,html').animate({ scrollTop: h-57},1000,function () {
            $("#single").css("display","none");
            $("#double").css("display","block");
        });
   });
   $(".showword2").click(function () {
   		$("#chatball9").css("display","block");
   });
   $(".lion").click(function () {
   		alert("恭喜了发现了它");
   		alert("狮子座，账号当然就是“lion”咯");
   });
});
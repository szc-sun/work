//二级菜单
var $ullis = $(".drowdown-menu li");
var $menuli = $(".drop_con");
$menuli.mouseover(function() {
	var $ul1 = $(this).children("ul")	
	$ul1.css("display", "block");
	var $lis = $ul1.children();
	$.each($lis,function(index,value){
				$(value).mouseenter(function(){
					$(this).css('color','red');
					//$(this).children().css('color','red');					
				})
				$(value).mouseleave(function(){
					$(this).css('color','');
					//$(this).children().css('color','');
				})
			})
	$menuli.mouseout(function(){
		$ul1.css("display", "none");
	})
});


$(".nav_dropdown_menu li a").hover(function(){
	$(this).css('color','red');
},function(){
	$(this).css('color','');
})
//划过背景变色

$(".nav_box a").hover(function(){
	$(this).parent().css({"background":"#bf0024"})
},function(){
	$(this).parent().css({"background":""})
})


$(".show_time").mouseover(function(){
	worldClockZone();
})

//动态时间
function calcTime(city, offset) { 
	var d = new Date(); 
	//getTimezoneOffset() 返回值:本地时间与 GMT 时间之间的时间差，以分钟为单位。
	//utc :GMT 时间
	var utc = d.getTime() + (d.getTimezoneOffset() * 60000); 
	var nd = new Date(utc + (3600000 * offset)); 
	var gmtTime = new Date(utc) 
	var day = nd.getDate(); 
	var month = nd.getMonth(); 
	var year = nd.getYear(); 
	var hr = nd.getHours(); //+ offset 
	var min = nd.getMinutes(); 
	var sec = nd.getSeconds(); 
	 
	year += 1900 
	
//var monthArray = new Array("1月", "2月", "March", "April", "May", "June", "July", "August", 
//"September", "October", "November", "December") 
	var monthArray = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");
	var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	if (year % 4 == 0){ 
		monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	} 
	if(year % 100 == 0 && year % 400 != 0){ 
		monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"); 
	} 
	if (hr >= 24){ 
		hr = hr-24;
		day -= -1;
	} 
	if (hr < 0){ 
		hr -= -24;
		day -= 1; 
	} 
	if (hr < 10){ 
		hr = "0" + hr;
	} 
	if (min < 10){ 
		min = "0" + min; 
	} 
	if (sec < 10){ 
		sec = "0" + sec; 
	} 
	if (day <= 0){ 
		if (month == 0){ 
			month = 11 
			year -= 1 
		} else{ 
		month = month -1 
		} 
		day = monthDays[month]; 
	} 
	if(day > monthDays[month]){ 
		day = 1 ;
		if(month == 11){ 
			month = 0;
			year -= -1; 
		} else{ 
			month -= -1 ;
		} 
	} 
	return city +"："+year+"年"+monthArray[month] +"月"+day + "日 " + hr + ":" + min + ":" + sec;
} 
function worldClockZone(){ 
	$("#localutc_time").html("本地时间：" + (new Date()).toLocaleString());
	$("#losangeles_time").html(calcTime('美国洛杉矶', '-8'));
	$("#frankfurt_time").html(calcTime('德国法兰克福', '+1'));
	$("#tokyo_time").html(calcTime('日本大阪', '+9'));
	$("#london_time").html(calcTime('英国伦敦', '+1'));
	$("#sydney_time").html(calcTime('澳洲悉尼', '+11'));
	/*document.getElementById('localutc_time').innerHTML = "本地时间：" + (new Date()).toLocaleString(); 
////document.getElementById('portland_time').innerHTML = calcTime('美国波特兰', '-8'); 
	document.getElementById('losangeles_time').innerHTML = calcTime('美国洛杉矶', '-8'); 
	document.getElementById('frankfurt_time').innerHTML = calcTime('德国法兰克福', '+1'); 
	document.getElementById('tokyo_time').innerHTML = calcTime('日本大阪', '+9'); 
	document.getElementById('london_time').innerHTML =calcTime('英国伦敦', '+1'); 
	document.getElementById('sydney_time').innerHTML = calcTime('澳洲悉尼', '+11'); */
	setTimeout("worldClockZone()", 1000) 
}
	
$(".btn2").click(function(){
	//location.href="cart.html";
	$(location).attr('href', 'cart.html');
})

//回到顶部
$(document).scroll(function(){
	var $scroll = $(this).scrollTop();
	if($scroll >= 400){
		$(".backToTop").css("display","block");
	}else{
		$(".backToTop").css("display","none");
	}
	
})
$("<div>", {
  		"class": "backToTop",
  		"style":"position: fixed;right: 10px;bottom: 10%;width: 40px;height: 40px;line-height: 40px;opacity: 0.9;border-radius: 20px;color: #fff;text-align: center;background: #000;cursor: pointer;z-index: 1000;overflow: hidden;display:none;"
		}).appendTo($("body"));
$("<span>",{
	"class":"fa fa-chevron-up"				
}).appendTo($(".backToTop"))


$(".backToTop").click(function(){
	$(document).scrollTop(0);
})

//划过变色
$(".select a").hover(function(){
	$(this).css({"color":"red","font-size":"16px"});
},function(){
	$(this).css({"color":"#888","font-size":"12px"});
})

/*表单验证*/
//用户名验证


$("#uname").blur( function () { 
	var $uname = $("#uname").val();
	console.log($uname);
	if($uname.length< 6 || $uname.length>18){
		Ts("长度应为6~18个字符");
//		alert("长度应为6~18个字符");
	}else if(/^\d/.test($uname)){
		Ts("首字母不能为数字");
//		alert("首字母不能为数字");
	}
	else if(/\W/.test($uname)){
		Ts("只能由数字、字母、下划线组成");
//		alert("只能由数字、字母、下划线组成");
	}
})

$("#upwd").blur(function(){
	var $upwd = $("#upwd").val();
	if($upwd.length< 6 || $upwd.length>18){
		Ts("长度应为6~18个字符");
//		alert("长度应为6~18个字符");
	}else if(/\W/.test($upwd)){
		Ts("只能由数字、字母、下划线组成");
//		alert("只能由数字、字母、下划线组成");
	}
})
$("#password_check").blur(function(){
	if($(this).val()!=$("#upwd").val()){
		Ts("两次密码输入不同!");
	}
})
$(".change_code").html(testCode());
$(".change_code").click(function(){
	$(".change_code").html(testCode());
})
$("#yzm").blur(function(){

//	console.log($(this).val(),$(".change_code").html())
	if($(this).val().toLowerCase()!=$(".change_code").html().toLowerCase()){
		Ts("两个验证码输入不同!");
	}
})

//if($uname.length < 6 || $uname.length)
//提示倒计时
//function Ts(str){
//	
//	var Timer = null;
//	var num = 1;
//	var tem = 0.001
//	clearInterval(Timer);
//	$(".tishi").html(str);
//	$(".tishi").css("display","block");
//	Timer=setInterval(function(){
//		tem = tem + 0.01
//		num = num - tem;
//		$(".tishi").css("opacity",num);
//		if(num < 0){
//			$(".tishi").css("display","none");
//			clearInterval(Timer)
//		}
//	},150)
//}
function Ts(str){
	$(".tishi").html(str);
	$(".tishi").css("display","block").fadeOut(3000);
}

function testCode(){
	var arr = [];
	for(var i = 0; i < 4; i++){
		var tmp =parseInt(Math.random() * 100);
		if (tmp >= 0 && tmp <= 9) {
			arr.push(tmp);
		}else if(tmp >= 65 && tmp <= 90){
			var bigStr = String.fromCharCode(tmp);
			arr.push(bigStr);
		}else if (tmp >= 17 && tmp <= 42) {
			var smallStr = String.fromCharCode(tmp + 80);
			arr.push(smallStr);
		}else{
			i--;
		}
	}
	var code = arr.join("")
	return code;
}



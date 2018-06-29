
var $ullis = $(".drowdown-menu li");
var $menuli = $(".drop_con");
$menuli.mouseover(function() {
	var $ul1 = $(this).children("ul")	
	$ul1.css("display", "block");
	var $lis = $ul1.children();
	$.each($lis,function(index,value){
				$(value).mouseenter(function(){
					$(this).css('color','red');
					$(this).children().css('color','red');
				})
				$(value).mouseleave(function(){
					$(this).css('color','');
					$(this).children().css('color','');
				})
			})
	$menuli.mouseout(function(){
		$ul1.css("display", "none");
	})
});

$(".drop_con").mouseover(function(){
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
	$("#london_time").html(calcTime('澳洲悉尼', '+1'));
	$("#sydney_time").html(calcTime('英国伦敦', '+11'));
	/*document.getElementById('localutc_time').innerHTML = "本地时间：" + (new Date()).toLocaleString(); 
////document.getElementById('portland_time').innerHTML = calcTime('美国波特兰', '-8'); 
	document.getElementById('losangeles_time').innerHTML = calcTime('美国洛杉矶', '-8'); 
	document.getElementById('frankfurt_time').innerHTML = calcTime('德国法兰克福', '+1'); 
	document.getElementById('tokyo_time').innerHTML = calcTime('日本大阪', '+9'); 
	document.getElementById('london_time').innerHTML =calcTime('澳洲悉尼', '+1'); 
	document.getElementById('sydney_time').innerHTML = calcTime('英国伦敦', '+11'); */
	setTimeout("worldClockZone()", 1000) 
}
	

var $dls = $("dl");
$.each($dls,function(index,value){
	$(value).mouseover(function(){
		$("<div>", {
  		"class": "test",
  		text: "全球海淘精选",
  		"style":"color:#fff;position:absolute;width:100%;height:50px;background: rgba(0,0,0,.5);left:0;top:0;text-align:center;line-height:50px;"
	}).appendTo($(value));	
	});
	$(value).mouseout(function(){
		$(".test").remove();
	});
	
})

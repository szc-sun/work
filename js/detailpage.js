
new $ajax({
	type : "get",
	url : "php/detailpage/detailpage.php",
	data : {
		"gid" : "1"
	},
	success : function(response){
		console.log(typeof response);
		var arr = JSON.parse(response);
		console.log(typeof arr);
		console.log(arr.gname)
		$(".gname").html(arr.gname);
		$(".price1").html(arr.price);
		$(".remark").html(arr.remark);
		$(".product_group_more #a1").append(arr.tab1);
		$(".product_group_more #a2").append(arr.tab2);
		$(".product_group_more #a3").append(arr.tab3);
		$(".product_group_more #a4").append(arr.tab4);
		$(".product_group_more #a5").append(arr.tab5);
		$(".product_group_more #a6").append(arr.tab6);
		$(".img1").attr("src",arr.pic1);
		$(".img2").attr("src",arr.pic2);
		$(".img3").attr("src",arr.pic3);
		$(".img4").attr("src",arr.pic4);
		$(".img5").attr("src",arr.pic5);
		$(".img6").attr("src",arr.pic6);
					
	}
}); 
//选中商品
$.each($(".product_group_more a"),function(){
	$(this).click(function(){
		$(this).toggleClass("on");
		$(".num").text("1");
		$(".product_group_more a"). not($(this)).attr("class","");
	})
})
//商品数量
$(".num").text("1");
var t = $(".num").text();
$('.count .numup').click(function(){
	var tmp = parseInt($(".num").text()) + 1;
	$(".num").text(tmp);
//	console.log(typeof parseInt($(".num").text()));
})
$('.count .numdown').click(function(){
	var tmp = parseInt($(".num").text()) - 1;
	$(".num").text(tmp);
//	console.log(typeof parseInt($(".num").text()));
})

/*//添加到购物车
addCart();
function addCart(){
	//获取商品id,名字,价格,优惠价格,件数;
	var $gid = $("#gid");
	var $gname = $(".gname");
	var $price1 = $(".price1");
	var	$price2 = $(".price2");
	var $nums =$(".num");
	$(".btn-car").click(function(){
		var sendMsg = `gid=${$gid.text()}&gname=${$gname.text()}&price1=${$price1.text()}&price2=${$price2.text()}&nums=${$nums.text()}`
		
		$.ajax({
			type : "post",
			url : "php/detailpage/addCart.php",
			data : sendMsg,
			success : function(response){
				alert("添加成功");
				location.reload();
				
			}
		}); 
	
	})
	
}*/

$(".btn-car").click(function(){
	addCart();
})
function addCart(){
	//获取商品id,名字,价格,优惠价格,件数;
	var $gid = $("#gid");
	var $gname = $(".gname");
	var $desc =  $(".desc");
	console.log($gname.text(),$desc.text());
	var $price1 = $(".price1");
	var	$price2 = $(".price2");
	var $nums =$(".num");
	
	var sendMsg = `gid=${$gid.text()}&gname=${$gname.text()}&desc=${$desc.text()}&price1=${$price1.text()}&price2=${$price2.text()}&nums=${$nums.text()}`
		
		$.ajax({
			type : "post",
			url : "php/detailpage/addCart.php?date="+new Date().getTime(),
			data : sendMsg,
			success : function(response){
				alert("添加成功");
				location.reload();
				
			}
		}); 
	
	
	
}
	
console.log($("h1").text());

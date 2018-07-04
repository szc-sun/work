//获取数据库的购物车信息
$.ajax({
	type : "get",
	url : "php/cart/cartshow.php",
	data : {
		"table" : "cart"
	},
	success : function(response){
//		console.log(typeof response);
//		console.log(response);
		var arr = JSON.parse(response);
//		console.log(typeof arr);
//		console.log(arr[0].gname);
		//显示到页面
		$.each(arr,function(index,value){
			var $str =  `
			
			<div class="cart-group-item" id="">
							
	                        <div class="row">
	                        <div id = "gid" style = "display:none;">${arr[index].gid}</div>
	                            <div class="col-xs-1 col">
	                            	<span class="select_lable">
	                            		<input type="checkbox" name="1984" id="check_product_1">
	                            		<label for="check_product_1"></label>
	                            	</span></div>
	                            <div class="col-xs-2 col">
	                                <a href="detailpage.html" target="_blank">
	                                    <img src="http://img5.haitao.com/sku/img/0/9/9682/9682_0.jpg!80" data-original="http://img5.haitao.com/sku/img/0/9/9682/9682_0.jpg!80" onerror="nofind();" style="display: inline;">
	                                </a>
	                            </div>
	                            <div class="col-xs-3  text-left col">
	                                <p class="title">
	                                	<a href="detailpage.html" target="_blank">${arr[index].desc}</a> 
	                                </p>
	                                <p>
	                                    <span class="text-border text-border-red">包邮</span>                                                                									<span class="text-border text-border-gold">限5件</span> 
	                                </p>
	                            </div>
	                            <div class="col-xs-3 text-muted col">
	                            	<b class="text-red ">${arr[index].price1}</b>
	                                <p><span class="daren-price">
	                                	<i class="fa fa-vimeo text-gold"></i> 省55元</span>
	                                </p>                            
	                            </div>
	                            <div class="col-xs-2 num-btn text-center col">
	                                <a href="javascript:void(0);" name="${arr[index].gname}" onclick = "numdown()" id="numdown"> - </a>
	                                <input name="nums" id="nums" type="text" value="${arr[index].nums}">
	                                <a href="javascript:void(0);" name="${arr[index].gname}" onclick = "numup()" id="numup"> + </a>
	                            </div>
	
	                            <div class="col-xs-1 text-right col">
	                            	<a href="javascript:void(0);" name="1984" id="delete" onclick = "Del()">
	                            		<span class="fa fa-trash text-gray"></span>
	                            	</a>
	                            </div>
	                        </div>
	                    </div>
			
			`;
			$($str).appendTo($(".cart_con"));
			
		})	
		$(".cart_none").css("display","none");
		$(".cart_show").css("display","block");
	}
});

//件数加减


function numdown(){
//	console.log($("#nums").val())
	var tmp = parseInt($("#nums").val()) - 1;
	$("#nums").val(tmp);
	updateCart(tmp);
	
}
function numup(){
//	console.log($("#nums").val())
	var tmp = parseInt($("#nums").val()) + 1;
	$("#nums").val(tmp);
	updateCart(tmp);
}


function updateCart(num){
	var $gid = $("#gid");
	var $nums =$("#nums");
	var sendM = `gid=${$gid.html()}&nums=${num}`;
//	console.log(sendM);
	$.ajax({
			type : "post",
			url : "php/cart/update.php?date="+new Date().getTime(),
			data : sendM,
			success : function(response){
				alert("修改成功");
				location.reload();
				
			}
		}); 
}

//删除
function Del(){
	var war = confirm("确定删除吗?")
	if(war == true){
		delCart();
	}
}

function delCart(){
	var $gid = $("#gid");
	var sendM = `gid=${$gid.html()}`;
//	console.log(sendM);
	$.ajax({
			type : "post",
			url : "php/cart/delete.php?date="+new Date().getTime(),
			data : sendM,
			success : function(response){
				alert("删除成功");
				location.reload();
				
			}
		}); 
}



$(".select_lable label").click(function(){
//	console.log($(".select_lable label"));
	 $(this).toggleClass("bg_red");
	 choose();
})

function choose(){
	$(".row .select_lable label").toggleClass("bg_red");
}


var $ullis = $(".drowdown-menu li");
var $menuli = $(".topL .drop_con");
$menuli.mouseover(function() {
	var $ul1 = $(this).children("ul")	
	$ul1.css("display", "block");
	var $lis = $ul1.children();
	$.each($lis,function(index,value){
				$(value).mouseenter(function(){
					$(this).css('background','yellow');
				})
				$(value).mouseleave(function(){
					$(this).css('background','');
				})
			})
	$menuli.mouseout(function(){
		$ul1.css("display", "none");
	})
});

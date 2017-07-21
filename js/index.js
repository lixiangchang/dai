$(function(){
	var flag=false;
	$(".money>div").click(function(){
		flag=!flag;
		if(flag){
			$(".money img").css("transform","rotate(180deg)");
			$(".money ul").animate({'height':"180px"})
			$(".money ul li").click(function(){
				$(".money>div>input").val(parseInt($(this).html()))
			})
		}else{
			$(".money img").css("transform","rotate(0)");
			$(".money ul").animate({'height':"0"})
		}
//		$(".money>div").mouseout(function(){
//			flag=false;
//			$(".money img").css("transform","rotate(0)");
//			$(".money ul").animate({'height':"0"})
//		})
	})
	var flag1=false;
	$(".deadile").click(function(){
		flag1=!flag1;
		if(flag1){
			$(".deadile img").css("transform","rotate(180deg)");
			$(".deadile ul").animate({'height':"180px"})
			$(".deadile ul li").click(function(){
				$(".deadile>div>input").val(parseInt($(this).children("span").eq(0).html()))
				$(".deadile>div>span").html($(this).children("span").eq(1).html())
				console.log($(this).children("span").eq(0).html())
				console.log($(this).children("span").eq(1).html())
			})
		}else{
			$(".deadile img").css("transform","rotate(0)");
			$(".deadile ul").animate({'height':"0"})
		}
//		$(".deadile>div").mouseout(function(){
//			flag=false;
//			$(".deadile img").css("transform","rotate(0)");
//			$(".deadile ul").animate({'height':"0"})
//		})
		//$(".deadile img").css("transform","rotate(180deg)");
		//$(".deadile ul").animate({'height':"180px"})
	})
})

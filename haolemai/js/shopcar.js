
var nujd = $(".detailsmain-number-input input").val()
    nujd = parseInt(nujd)
 $(".shopcar span i").text(localStorage.bio);   
 $(".detailsmainlist .detailsmain-procart .detailsmain-cartBtn i").text(localStorage.bio)
    
$(".n_cartadd").click(function(){
	nujd = nujd+1;
	$(".detailsmain-number-input input").val(nujd)	
})
$(".n_cartreduce").click(function(){	
	if(nujd > 0){
		nujd = nujd-1;
		$(".detailsmain-number-input input").val(nujd)
	}
})


$(".detailsmain-cartBtn").click(function(){
	
	var $jfuej = $(".detailsmain-size .detailsmain-activitywrap2 a")
	if(!$jfuej.hasClass("imjos")||nujd === 0 ){
		if(!$jfuej.hasClass("imjos")){
			alert("添加失败 请补全尺码")
		}
		if(nujd === 0){
			alert("添加失败 请添加数量")
		}
	}else{
		var npsda = $(".shopcar span i").text()
		npsda = parseInt(npsda)
		var molsad = npsda+nujd;
		$(".shopcar span i").text(molsad)		
		localStorage.setItem("bio",molsad);
		$(".detailsmainlist .detailsmain-procart .detailsmain-cartBtn i").text(molsad)
		alert("成功添加到购物车")
	}
	$jfuej.removeClass("imjos");
	$(".detailsmain-number-input input").val(0)
	nujd = 0;
})


 
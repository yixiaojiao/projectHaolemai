/*绑定1*/
$("#erOne,.SportsLife").mouseenter(function(){
	$(".SportsLife").show();
})

$("#erOne,.SportsLife").mouseleave(function(){
	$(".SportsLife").hide();
})

/*绑定2*/
$("#erTwo,.CasualClothing").mouseenter(function(){
	$(".CasualClothing").show();
})

$("#erTwo,.CasualClothing").mouseleave(function(){
	$(".CasualClothing").hide();
})

/*绑定3*/
$("#erThr,.Shoes").mouseenter(function(){
	$(".Shoes").show();
})

$("#erThr,.Shoes").mouseleave(function(){
	$(".Shoes").hide();
})

/*绑定4*/
$("#erFor,.Earth").mouseenter(function(){
	$(".Earth").show();
})

$("#erFor,.Earth").mouseleave(function(){
	$(".Earth").hide();
})



$(".SportsLife .colbox:gt(0),.CasualClothing .colbox:gt(0),.Earth .colbox:gt(0),.Shoes .colbox:gt(0)")
.css({"border-left":"1px dashed #999"})


var indexValue = 0;
var Alldata = eval(localStorage.getItem("repertory"));
if(location.hash !== ""){
	indexValue = location.hash;
	var reg = /^#/;
    indexValue = indexValue.replace(reg,"");
} 

var detaimg = '<img src="'+Alldata[indexValue].img+'"/>'
//var detaimg2 = '<img src="'+Alldata[indexValue].img2+'"/>'

$(".sddalok2,.detailsmain-img-small a,.detailsmain-img-big").html(detaimg)
//$(".d.detailsmain-img-small a,.detailsmain-img-bigetailsmain-img-small a,.detailsmain-img-big").html(detaimg2)
$("#detailsmain-Tit1Name").text(Alldata[indexValue].tit1)
$(".prodPrice-num").text(Alldata[indexValue].price)
$(".pceoldnum").text(Alldata[indexValue].oldprice)
$(".pcuntdnum").text(Alldata[indexValue].rebate)
$(".ain-prodtit2").text(Alldata[indexValue].tit2)

$(".detailsmain-size .detailsmain-activitywrap2 a").click(function(){
	$(this).addClass("imjos");
	$(this).siblings().removeClass("imjos");
})

$(".detailsmain-img-small").on({
			            "mouseenter":details_mouseenter,
			            "mouseleave":details_mouseleave,
			            "mousemove":details_mousemove
			        })


function details_mouseenter(){
	$(".detailsmain-selectBox").css({"display":"block"});
	$(".detailsmain-img-big").css({"display":"block"});
}
function details_mouseleave(){
	$(".detailsmain-selectBox").css({"display":"none"});
	$(".detailsmain-img-big").css({"display":"none"});
}
function details_mousemove(evt){
	var e = evt || window.event;
	var _left = e.offsetX - $(".detailsmain-selectBox").width() / 2;
	var _top = e.offsetY - $(".detailsmain-selectBox").height() / 2;
	
	var ratio = parseFloat($(".detailsmain-img-big").width() / $(".detailsmain-selectBox").width());
	var _number = $(".detailsmain-img-small").width() * ratio;
			
	$(".detailsmain-img-big img").height(_number);
	
	_left = _left <= 0 ? 0 : _left;
    _top = _top <= 0 ? 0 : _top;
    
    var _maxL = $(".detailsmain-img-small").width() - $(".detailsmain-selectBox").width();
    var _maxT = $(".detailsmain-img-small").height() - $(".detailsmain-selectBox").height();
    
    _left = _left >= _maxL ? _maxL : _left;
    _top = _top >= _maxT ? _maxT : _top;
    
    $(".detailsmain-selectBox").css({"left":_left+"px"})
	$(".detailsmain-selectBox").css({"top":_top+"px"})
	
	$(".detailsmain-img-big img").css({"left":_left *(-1) * ratio + "px"});
	$(".detailsmain-img-big img").css({"top":_top *(-1) * ratio + "px"});
}

/*----------------------------楼梯--------------------------*/

    var sdsae =  $(".detailsmain-nav").children()
    var feasd =  $(".StairsAll").children()
    var indexArray = [];
    var stairsArray = [];

     
    for(var i = 0 ; i < feasd.length ; i ++){
                var ele = feasd.eq(i)
                stairsArray.push({
                    asdp : Math.round(ele.offset().top),
                })
           }
    for(let i = 0 ; i < sdsae.length ; i ++){
            sdsae.eq(i).bind("click",i,function(){
              	$(window).scrollTop(stairsArray[i].asdp-$(".detailsmainlist").height());
              	sdsae.eq(i).addClass("nav-Incommon-a");
              	sdsae.eq(i).siblings().removeClass("nav-Incommon-a")
             })
            }
    
    
    $(window).on("scroll",function(){
    	if($(window).scrollTop()>966){
            $(".detailsmainlist .detailsmain-procart").css({"display":"block"})
    		}
		else{
			$(".detailsmainlist .detailsmain-procart").css({"display":"none"})
		}
    })
    
   




var $iponIpt = $(".warpperipone input");
var $setupIpt = $(".warpperSetup input");
var $verificationIpt = $(".warpperVerification input");
var $fastenerbtn = $(".warpper-fastener input");


var $iponspan = $(".warpperipone span");
var $setupspan = $(".warpperSetup span");
var $verificationspan = $(".warpperVerification span");
var $fastenerspan = $(".fastener span");

var yanzhengma12 = randomInt(1000 , 9999);
   
$iponIpt.on("blur",iponIptBlur)
$setupIpt.on("blur",setupIptBlur)
$verificationIpt.on("blur",verificationIptBlur)
$fastenerbtn.on("click",fastenerbtnClick)
$(".warpperSetupEye").on("click",warpperSetupEyeClick)


function iponIptBlur(){
	
	var iponIptval = $iponIpt.val();
	var reg = /^\d{11}$/;
	if(reg.test(iponIptval)){
		$iponspan.addClass("correct");
		$iponspan.removeClass("error");
	}else{
		$iponspan.addClass("error");
		$iponspan.removeClass("correct");
	}		
}

function setupIptBlur(){	
	var setupIptval = $setupIpt.val();	
	var reg2 = /^\w{6,16}$/;
	if(reg2.test(setupIptval)){
		$setupspan.addClass("correct");
		$setupspan.removeClass("error");
	}else{
		$setupspan.addClass("error");
		$setupspan.removeClass("correct");
	}
}

function warpperSetupEyeClick(){	 
	if( $(".warpperSetupEye").hasClass("Eyeinvisible")){
        $(".warpperSetupEye").removeClass("Eyeinvisible").addClass("Eyevisible");
        $setupIpt.attr("type","text");
    }else{
        $(".warpperSetupEye").removeClass("Eyevisible").addClass("Eyeinvisible");
        $setupIpt.attr("type","password");
    };    
}

$(".verification_p").text(yanzhengma12)
$(".verification_p").click(function(){
	yanzhengma12 = randomInt(1000 , 9999);
	$(".verification_p").text(yanzhengma12).css("background",randomColor(randomInt(0,255)))
})


function verificationIptBlur(){

	var val32 = $verificationIpt.val() 
	if(val32 == yanzhengma12 ){
		$verificationspan.addClass("correct");
		$verificationspan.removeClass("error");
	}else{
		$verificationspan.addClass("error");
		$verificationspan.removeClass("correct");
	}
}

function fastenerbtnClick(evt){
	var e = evt || window.event;
	
	if(!$iponspan.hasClass("correct")||!$setupspan.hasClass("correct")||!$verificationspan.hasClass("correct")){
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		if(!$iponspan.hasClass("correct")){
			$iponspan.addClass("error");		
		}
		if(!$setupspan.hasClass("correct")){
			$setupspan.addClass("error");
		}
		if(!$verificationspan != yanzhengma12){
			$verificationspan.addClass("error");
		}
	}else{
		alert("注册成功，点击确定跳转到登陆页面")
	}
	
}
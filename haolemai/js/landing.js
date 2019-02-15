    
    $(".account").click(function(){
    		$(".accountTab").css({
    			"z-index":999,
    		});
    		$(".scanTab").css({
    			"z-index":2,
    		});
    		$(".account").addClass("active");
    		$(".scan").removeClass("active");
    	})
    	
    	$(".scan").click(function(){
    		$(".scanTab").css({
    			"z-index":999,
    		});
    		$(".accountTab").css({
    			"z-index":2,
    		});
    		$(".scan").addClass("active");
    		$(".account").removeClass("active");
    	})


/*--------------------------------------*/
$(".form_btn").submit(function(evt){
	var e = evt || window.event;
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
})

/*--------------------------------------*/

$(".accountTab .btn").on("click",function( ){
	var sdasd = null;
    var usr_value = $(".accountuse").val();
    var pwd_value = $(".scanuse").val();
    var data = {
            username : usr_value,
            password : pwd_value
        }
    console.log(data)

	$.post("http://127.0.0.1/project/projectOne/haolemai/php/interface.php",
	        data, render,"json")
	
	
		function render(res){ 
			console.log(res)
			 if(res.state === "succound" ){
			 	alert("登陆成功（点击确定进入主页）");
			 	location.href = "index.html";
			 }
		}
	           
})


	    
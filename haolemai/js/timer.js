
	
			var date = new Date("2019/2/24");
			setInterval(yuandan_timer,10);
			function yuandan_timer(){
                  var yuandan = date.getTime() - Date.now();
                  
                  
                  var one_date = parseInt(yuandan / 24 / 3600 / 1000) ;
                  var hours = parseInt((yuandan - one_date * 24 * 1000 * 3600) / 1000 / 3600) ;
                  var hour = parseInt(yuandan / 1000 / 3600) ;
                  var minute = parseInt((yuandan - hour * 1000 * 3600) / 1000 / 60);
                  var second = parseInt((yuandan - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
                  var ms = yuandan % 1000;
                  
                  $(".day i").text(addZero(one_date));
                  $(".hour i").text(addZero(hours));
                  $(".minute i").text(addZero(minute));
                  $(".second i").text(addZero(second));
                  $(".fsecond i").text(parseInt(ms/100));
                  $(".commodityBox .fsecond i,.merchandise .fsecond i").text(parseInt(ms/10));
                  return yuandan_timer;
            }

            function addZero(num){
                  return num < 10 ? "0" + num : num;
            }
			yuandan_timer()
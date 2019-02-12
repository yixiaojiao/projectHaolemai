	
	
	       var _data = document.getElementById("#_date");
	       var _hours = document.getElementById("#_hours");
	       var _minute = document.getElementById("#_minute");
	       var _second = document.getElementById("#_second");
//	       var _data = document.getElementById("#_date");
	
	
	
	
			var date = new Date("2019/2/24");
			setInterval(yuandan_timer,1000);
			function yuandan_timer(){
                  var yuandan = date.getTime() - Date.now();
                  
                  
                  var one_date = parseInt(yuandan / 24 / 3600 / 1000) ;
                  var hours = parseInt((yuandan - one_date * 24 * 1000 * 3600) / 1000 / 3600) ;
                  var hour = parseInt(yuandan / 1000 / 3600) ;
                  var minute = parseInt((yuandan - hour * 1000 * 3600) / 1000 / 60);
                  var second = parseInt((yuandan - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
                  
                  _date.innerHTML = addZero(one_date);
                  _hours.innerHTML = addZero(hours);
                  _minute.innerHTML =  addZero(minute);
                  _second.innerHTML =  addZero(second);

                  return yuandan_timer;
            }

            function addZero(num){
                  return num < 10 ? "0" + num : num;
            }
			yuandan_timer()
$.ajax("json/content.json")
            .then((res)=>{
                     console.log(res);
                     obj = res;
                     commodityOne();
            })
function commodityOne(){
                  var html = "";
                  for(var goods in obj){
                        html += `<div class="commodityBox">
			                        <a href="#" target="_blank">
							    		<img src=${obj[goods].img} alt="">
							    		<span class="tit1">${obj[goods].tit1}</span>
							    		<span class="tit2">${obj[goods].tit2}</span>
							    		<span class="tit3">${obj[goods].tit3}</span>
							    		<span class="time" id="timetwo2">
								    		<span class="day"><b>0</b>天</span>
								    		<span class="hour"><b>0</b>时</span>
								    		<span class="minute"><b>0</b>分</span>
								    		<span class="second"><b>0</b>秒</span>
								    		<span class="fsecond"><b>0</b></span>
							    		</span>
							    	</a>
		                        </div>`;
                  }
                  $(".main1w1220").html(html);
                  var he = $(".main1w1220").get(0).offsetHeight
                  $(".main1").height(he);
            }  
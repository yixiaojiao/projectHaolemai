$.ajax("json/content.json")
            .then((res)=>{
                     obj = res;
                     commodityOne();
            })
function commodityOne(){
                  var html = "";
                  for(var goods in obj){
                        html += `<div class="commodityBox">
			                        <a href="#">
							    		<img src=${obj[goods].img} alt="">
							    		<span class="tit1">${obj[goods].tit1}</span>
							    		<span class="tit2">${obj[goods].tit2}</span>
							    		<span class="tit3">${obj[goods].tit3}</span>
							    		<span class="time">
								    		<span class="day"><i>0</i>天</span>
								    		<span class="hour"><i>0</i>时</span>
								    		<span class="minute"><i>0</i>分</span>
								    		<span class="second"><i>0</i>秒</span>
								    		<span class="fsecond"><i>0</i></span>
							    		</span>
							    	</a>
		                        </div>`;
                  }
                  $(".main1w1220").html(html);
                  var he = $(".main1w1220").get(0).offsetHeight
                  $(".main1").height(he);
            }  
           
$.ajax("json/content2.json")
            .then((res)=>{
                     obj = res;
                     commodityTwo();
            })
function commodityTwo(){
                  var html = "";
                  for(var goods in obj){
                        html += `<div class="merchandise">
									<a href="#">
										<img src="${obj[goods].img}">
										<p class="merchandiseTitle">${obj[goods].tit1}<span>${obj[goods].tit2}</span></p>
										<span class="time2">
											<span class="day"><i>0</i>天</span>
											<span class="hour"><i>0</i>时</span>
											<span class="minute"><i>0</i>分</span>
											<span class="second"><i>0</i>秒</span>
											<span class="fsecond"><i>0</i></span>
										</span>
									</a>
								</div>`;
                  }
                  $(".main2w1220").html(html);
                  var he = $(".main2w1220").get(0).offsetHeight
                  $(".main2").height(he);                  
            }
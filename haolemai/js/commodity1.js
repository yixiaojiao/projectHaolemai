            
            
        var warenumber = 40;    
        var count = 0;
        var listArray = [];
        
        
            $.ajax("json/commodity1.json")
            .then(render)

            function render(res){
            	listArray = res.list;
        
				localStorage.setItem( "repertory" ,JSON.stringify(listArray));
            	
            	$(".moreWarepageinat").pagination({                       // list.lenght 表示当前数据总量;
                        totalData : listArray.length,
                        showData : warenumber ,
                        prevContent : "上一页" , 
                        nextContent : "下一页",
                        keepShowPN:true,
                        callback : page
                  });
                  
                  
            	function page(api){
            		    count = $(".moreWarepageinat .active").text();
                        var min = (api.getCurrent() - 1) * warenumber;
                        var max = api.getCurrent() * warenumber
                        var html = template("test",{ res : listArray.slice( min,max )  })
                        $(".moreWarecontent").html(html);
			            $("#sioio").text(listArray.length);
			            $("#koisa").text(count);
			            $("#kosaa").text(Math.ceil(listArray.length/40));
                    }
	            	page({
	                        getCurrent : function(){
	                              return 1;
	                        }
	                 }) 
	            
	            }
             

            
//          $(".moreWarecontent").on("click",_getdata); 
            
            $(".moreWarecontent").on({
		            "click":_getdata,
		        })
            
            
			function _getdata(evt){
				    var e = evt || window.event;
				    var target = e.target || e.srcElement;
				    if(target.className === "moreWarecontent")  return false;
				    var $WarecontentWrap = $(target).parents("._Warecontent-wrap") || $(target);
				    var index = parseInt($WarecontentWrap.attr("data-index"))+(count-1)*warenumber;
//				    clothData = listArray[index];		
				    console.log(index);
				    console.log(count);
				    location.href = "detail.html#"+index;
			    }
			
				    	
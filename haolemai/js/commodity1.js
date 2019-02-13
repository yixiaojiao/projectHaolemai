            
            
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
            		    count ++;
                        var min = (api.getCurrent() - 1) * warenumber;
                        var max = api.getCurrent() * warenumber
                        var html = template("test",{ res : listArray.slice( min,max )  })
                        $(".moreWarecontent").html(html);
                        var sioio = document.getElementById("sioio");
                        var koisa = document.getElementById("koisa");
                        var kosaa = document.getElementById("kosaa");
			            sioio.innerHTML = listArray.length;
			            koisa.innerHTML = count;
			            kosaa.innerHTML = Math.ceil(listArray.length/40);
			            if(count == Math.ceil(listArray.length/40)){
			            	count = 0;
			            }
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
				    var index = $WarecontentWrap.attr("data-index");
//				    clothData = listArray[index];		
				    console.log(index);
				    location.href = "detail.html#"+index;
			    }
			
				    	
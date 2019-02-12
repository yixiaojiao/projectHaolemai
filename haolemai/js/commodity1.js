            
            
        var showNum = 40;    
        var count = 0;
            $.ajax("json/commodity1.json")
            .then(render)

            function render(res){
            	var res = res.list;
            	
            	$(".moreWarepageinat").pagination({                       // list.lenght 表示当前数据总量;
                        totalData : res.length,
                        showData : showNum ,
                        prevContent : "上一页" , 
                        nextContent : "下一页",
                        keepShowPN:true,
                        callback : page
                  });
            	function page(api){
            		    count ++;
                        console.log(res)
                        var min = (api.getCurrent() - 1) * showNum;
                        var max = api.getCurrent() * showNum
                        var html = template("test",{ res : res.slice( min,max )  })
                        $(".moreWarecontent").html(html);
                        var sioio = document.getElementById("sioio");
                        var koisa = document.getElementById("koisa");
                        var kosaa = document.getElementById("kosaa");
			            sioio.innerHTML = res.length;
			            koisa.innerHTML = count;
			            kosaa.innerHTML = Math.ceil(res.length/40);
			            if(count == Math.ceil(res.length/40)){
			            	count = 0;
			            }
                  }
            	page({
                        getCurrent : function(){
                              return 1;
                        }
                  })
                  
            }
            
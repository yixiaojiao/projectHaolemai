$.ajax("json/content0.json")
            .then((res)=>{
                     obj = res;
                     nameTag();
            })
function nameTag(){
                  var html = "";
                  for(var goods in obj){
                  html += `<a href="#" title="${obj[goods].title}">
                                <img src="${obj[goods].img}" alt="${obj[goods].alt}">
                           </a>`;
                    }
                  $(".brandinin").html(html);
                }







  

	

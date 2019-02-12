function Search(){
				this._import = document.querySelector("#_search");
				this.box1 = document.querySelector(".list");
				
			}  
			
			Search.prototype.init = function(){
				this._import.addEventListener("input",_throttle(this.search.bind(this),500));
				this._import.addEventListener("click",this._click.bind(this));
				document.addEventListener("click",this._Wclick.bind(this));	
 		  }	 
 		  
 			Search.prototype._click = function(evt){
 				var e = evt || window.event;
 				e.preventDefault;
 				this.box1.style.display = "block";
 				this._import.value = "";
 			}
 			
 			Search.prototype._Wclick = function(evt){
 				var e = evt || window.event;
 				var target = e.target || e.srcElement;
 				if(target.nodeName == "INPUT") return false;
 				this.box1.style.display = "none";
 				this._import.value = "运动现货上架 速戳~";
 			}
			Search.prototype.loadMsg = function(){
				console.log(this._import.value);
				var promise = jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this._import.value+"&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2","cb")
				return promise
			}
			
      Search.prototype.search = function(res){
         this.loadMsg()
				.then(function(res){
				    var html = "";
                    res.s.forEach((item,index)=>{
                        html += `<p>${item}</p>`
                    })
                    this.box1.innerHTML = html;
				}.bind(this))
			}
			
			var sea = new Search();
			sea.init();
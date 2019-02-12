    <div class="_Warecontent-wrap">
       {{each res as value i}}
				<div class="_Warecontent-img">
					<a href="#">
						<img alt="时尚休闲牛仔短裤" src={{value.img}}>
					</a>
				</div>
				<p class="_Warecontent-tit1">
					<a href="#">{{value.tit1}}</a>
				</p>
				<p class="_Warecontent-price">
					￥<span class="_Wareprice">{{value.price}}</span>
					<span class="_Warerebate">{{value.rebate}}</span>
					<span class="_Wareoldprice">{{value.oldprice}}</span>
				</p>
				<p class="_Wareexplain">
					<a href="#"><span class="_Wareexplain-tag">特价</span>{{value.tit2}}</a>
				</p>
	    {{/each}}
	</div>

var sech = $("._search").val();

console.log(sech);

$.ajax("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=asdas&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2",{
      dataType:"jsonp"
})
.then(function(res){
	console.log(res)
})
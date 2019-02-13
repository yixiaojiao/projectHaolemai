

var Alldata = eval(localStorage.getItem("repertory"));
var indexValue = location.hash;
var reg = /^#/;
indexValue = indexValue.replace(reg,"");

console.log(Alldata[indexValue].tit1)

var detaimg = '<img src="'+Alldata[indexValue].img+'"/>'

$(".detailsmain-img").html(detaimg)
$(".detailsmain-Tit1Name").text(Alldata[indexValue].tit1)
$(".prodPrice-num").text(Alldata[indexValue].price)
$(".pceoldnum").text(Alldata[indexValue].oldprice)
$(".pcuntdnum").text(Alldata[indexValue].rebate)
$(".ain-prodtit2").text(Alldata[indexValue].tit2)
$(".sddalok2").html(detaimg)



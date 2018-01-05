$(document).ready(function(){
	$("#ddlr").click(function(){
		$("#ifr",window.parent.document).attr("src","paging/ddlr.html");
	})
	$("#Excels").click(function(){
		$("#ifr",window.parent.document).attr("src","paging/excel.html");
	})
})
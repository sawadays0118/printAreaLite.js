/*
* printAreaLite.js 1.0 (jQuery plugins)
*
* Copyright (c) 2014 Tomoki Sawamura
* tomoki.sawamura0118@gmail.com
*
* Licensed under the MIT License:
* http://www.opensource.org/licenses/mit-license.php
*/
$.printAreaLite = function(e){
	var data = $(e).clone();
	$("body").append("<div id='printFields'>");
	$("#printFields").html(data);
	$("body").find("*:not(#printFields,#printFields *)").addClass("printDisplayNone");
	alert("印刷範囲を読み込んでいます。");
	setTimeout(function(){
		window.print();
		$(".printDisplayNone").removeClass("printDisplayNone");
		$("#printFields").remove();
	},2000);
};
/**
 * 
 * 版权所有  @June  
 * 开发者：Junezm
 * e-mail:junezm@foxmail.com
 * 
 **/
 (function ($) {
	$.fn.textOver = function(options) {
	    var allText;
		var dft = {
					//以下为该插件的属性及其默认值
					text:"",
					length:"20",
					type:"default"
				};
		var ops = $.extend(dft,options);
		// 判断是默认的字段或者通过text传入的字段
        if (ops.text!="") {
            allText=ops.text;
        }else{
        	allText=$(this)[0].innerText;
        }
        var partText=allText.substring(0, ops.length)+'...';
        var showPart='<a class="click-show" style="color:#44aaff;cursor:pointer;margin-left:10px;">展开</a>';
        var hidePart='<a class="click-hide" style="color:#44aaff;cursor:pointer;margin-left:10px;">收起</a>';
        $(this).html(partText+showPart)
        $(this).on('click','.click-show',function(){
        	$(this).parent().html(allText+hidePart)
        })
        $(this).on('click','.click-hide',function(){
        	$(this).parent().html(partText+showPart)
        })
	}
})(jQuery);
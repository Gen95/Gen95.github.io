(function(document , window , $){
	$(document).ready(function(){
		$(".epilog").change(function(){
            var button = document.querySelector("button"); 

            if($(this).value != "1"){
                $('.submit').removeAttr("disabled");
            }else if($(this).value == "1"){
                $('.submit').setAttr("disabled");
            }
        });
	});
})(document, window, jQuery);
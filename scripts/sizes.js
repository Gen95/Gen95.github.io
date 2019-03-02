(function(document , window , $){
  $(document).ready(function(){
    $(".read").click(function(){
        var num = $(this).attr('id')
        $('#secondary select').hide()
        $('.epilog[id='+num+']').show()
    })
  })
})(document, window, jQuery);
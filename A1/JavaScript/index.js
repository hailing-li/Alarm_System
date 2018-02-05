$(".real").mouseenter(function(){
        var image_name=$(this).data('image');
        var imageTag='<div style="position:absolute;">'+'<img src="'+image_name+'" alt="image" height="100" />'+'</div>';
        $(this).parent('div').append(imageTag);
    });
    $(".Your_class").mouseleave(function(){
        $(this).parent('div').children('div').remove();
    });

(function($) {
    //jQuery.fn.responsiveBlock = function(options){

        var options = {
            defColor : "white",
            hoverColor : "red"
        };
        var methods = {
                init : function(params){
                    var options = $.extend({},options, params);
                    return this;
                },
                make : function(){
                    $(this).css("background-color",options.defColor)
                        .mouseenter(function(){
                            $(this).css("background-color",options.hoverColor)
                                .css('cursor','pointer');//console.log($(this));
                        })
                        .mouseleave(function(){
                            $(this).css("background-color",options.defColor);
                        });
                    return this;
                }
            };

   // };
    $.fn.responsiveBlock = function(method){

        // немного магии
        if ( methods[method] ) {
            // если запрашиваемый метод существует, мы его вызываем
            // все параметры, кроме имени метода прийдут в метод
            // this так же перекочует в метод
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            // если первым параметром идет объект, либо совсем пусто
            // выполняем метод init
            return methods.init.apply( this, arguments );
        } else {
            // если ничего не получилось
            $.error( 'Метод "' +  method + '" не найден в плагине jQuery.mySimplePlugin' );
        }
    };
})(jQuery);
//$('#hover-div').responsiveBlock('make');

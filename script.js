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
$(document).ready(function(){
    var links = [
        {'id' : 'index','link' : 'index.html'},
        {'id' : 'persons','link' : 'pers.html'},
        {'id' : 'kollegii','link' : 'index.html'},
        {'id' : 'parents','link' : 'parents.html'},
        {'id' : 'press-centr','link' : 'pressa.html'},
        //{'id' : 'press-centr2','link' : 'pressa.html'},
        {'id' : 'zakon','link' : 'z1.html'},
        {'id' : 'information','link' : 'z2.html'},
        {'id' : 'contucts','link' : 'contacts.html'},
        {'id' : 'our_services','link' : 'services.html'},
        {'id' : 'service-3','link' : 'service-3.html'},
        {'id' : 'backcall','link' : 'backcall.html'},
        {'id' : 'visit','link' : 'online.html'},
        {'id' : 'z1','link' : 'z1.html'},
        {'id' : 'z2','link' : 'z2.html'},
        {'id' : 'press-inner','link' : 'press-inner1.html'},
        {'id' : 'press-tv','link' : 'press-tv.html'}
    ];
    $(links).each(function(n,el){
        $("a[id^='"+el.id+"']").attr('href',el.link);
    });
    $("ul.menu li a").click(function(){
        var table = $(this).parent().next().children('div:first'),
            vis = $(table).is(':visible');
        if (vis)
        {
            $(table).slideUp();
            $(this).removeClass("black");
        }
        else
        {
            $(table).slideDown();
            $(this).addClass("black");
        }
    });
});
//$('#hover-div').responsiveBlock('make');
function toggleActiveNextControlGroup(selector,active)
{
    //находим родительский control-group
    ctr = $(selector).parent().parent().parent();
    ctr2 = $(selector).parent().parent();
    if (active)
    {
        $(selector).removeAttr('disabled');
        $(selector).removeClass('disabled');
        //делаем активным
        $(ctr).removeClass('disabled');
        $(ctr2).removeClass('disabled');
    }
    else
    {
        $(selector).attr('disabled','disabled');
        $(selector).addClass('disabled');
        //делаем НЕ активным
        $(ctr).addClass('disabled');
        $(ctr2).addClass('disabled');
    }
}

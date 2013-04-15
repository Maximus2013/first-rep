$(function(){
    $('#visit-online .group-control').addClass('disabled');
    $('#visit-online .group-control:first').removeClass('disabled');
    //$('#choose_office-1,#choose_office-2').attr('disabled','disabled');
    $('#visit-online input,select[id!="visit_target"]').attr('disabled','disabled');
    $('#visit-online input,select[id!="visit_target"]').addClass('disabled');

    $('#visit-online').grewform({
        '#visit_target option[value!=other]:selected AND #visit_target option[value!=""]:selected' : {
            enable:'#type-relation-1,#type-relation-2',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#type-relation-1,#type-relation-2',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#type-relation-1,#type-relation-2',false)
                }
            }
        },
        //Если выбран послений пункт списка "Иное (укажите, что именно)"
        '#visit_target option[value=other]:selected' : {
            //show:'#other-text',
            custom :
            {
                match : function(){console.log('yes');
                    $('#other-text').fadeIn(200);
                    toggleActiveNextControlGroup('#input-other-text',true)
                },
                unmatch : function(){console.log('no');
                    $('#other-text').fadeOut(200);
                    toggleActiveNextControlGroup('#input-other-text',false);
                    $('#input-other-text').val('');
                }
            }
        },
        ':radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable : '#choose_office-1,#choose_office-2',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#choose_office-1,#choose_office-2',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#choose_office-1,#choose_office-2',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка
        ':radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable : '#choose_office-1,#choose_office-2',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#choose_office-1,#choose_office-2',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#choose_office-1,#choose_office-2',false)
                }
            }
        },
        ':radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable : '#visit_day',
            custom : {
                match : function(){
                    toggleActiveNextControlGroup('#visit_day',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#visit_day',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка
        ':radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable : '#visit_day',
            custom : {
                match : function(){
                    toggleActiveNextControlGroup('#visit_day',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#visit_day',false)
                }
            }
        },
        '#visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable:'#visit_time',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#visit_time',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#visit_time',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка и не пустым "Иное" текстом
        '#visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable:'#visit_time',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#visit_time',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#visit_time',false)
                }
            }
        },
        '#visit_time option:selected AND #visit_time option[value!=""]:selected AND #visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable:'input[name="fio"]',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('input[name="fio"]',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('input[name="fio"]',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка и не пустым "Иное" текстом
        '#visit_time option:selected AND #visit_time option[value!=""]:selected AND #visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable:'input[name="fio"]',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('input[name="fio"]',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('input[name="fio"]',false)
                }
            }
        },
        'input[name="fio"][value!=""] AND #visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable:'input[name="phone"]',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('input[name="phone"]',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('input[name="phone"]',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка и не пустым "Иное" текстом
        'input[name="fio"][value!=""] AND #visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable:'input[name="phone"]',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('input[name="phone"]',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('input[name="phone"]',false)
                }
            }
        },
        'input[name="phone"][value!=""] AND input[name="fio"][value!=""] AND #visit_day option:selected AND #visit_day option[value!=""]:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value!=other]:selected' : {
            enable:'#idSubmit',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#idSubmit',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#idSubmit',false)
                }
            }
        },
        //Селекторы выше и ниже отличаются выбором пункта первого списка и не пустым "Иное" текстом
        'input[name="phone"][value!=""] AND input[name="fio"][value!=""] AND #visit_day option:selected AND :radio[name=choose_office]:checked AND :radio[name=type_relation]:checked AND #visit_target option[value=other]:selected AND #input-other-text[value!=""]' : {
            enable:'#idSubmit',
            custom :
            {
                match : function(){
                    toggleActiveNextControlGroup('#idSubmit',true)
                },
                unmatch : function(){
                    toggleActiveNextControlGroup('#idSubmit',false)
                }
            }
        }
    });
})
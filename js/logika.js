$('.inputnew').click(click_input); 

                function click_input(e) 
                {
                    e = e || window.event;
                    var el = e.target || e.srcElement;
                    var idFull = "#" + el.id;
                    var idShort = idFull.split("_")[1];
                    $(idFull).bind('keyup', function(e)
                    {
                        var value = $(idFull).val().toLowerCase();
                        
                        /* удаляем лишние пробелы, обрезаем первый и последний на всякий случай */
                        value = value.replace(/\s+/g,' ').trim();
                    
                        var aaa = answers[idShort*1-1].split(" / ");            
                        
                        if (value == aaa[0] || value == aaa[1] || value == aaa[2] || value == aaa[3])
                        {
                            $(idFull).css({'backgroundColor':'lightgreen', 'border':'1px solid white'});
                        }
                    });
                }
           
            
                $('.newbutton').click(click_help); 

                function click_help(e) 
                {
                    e = e || window.event;
                    var el = e.target || e.srcElement;
                    var idFull = el.id;
                    var idShort = idFull.split("_")[1];
                    
                    /* увеличение высоты textarea в случае, если ответ не вмещается в одну строку */
                    if ( (answers[idShort*1-1].length > 31) && ($("#input_" + idShort).width() <= 350)) //браузер понимает только пиксели...
                    {
                        $("#input_" + idShort).attr('rows', 2);
                    }
                    
                    if ( (answers[idShort*1-1].length > 59) && ($("#input_" + idShort).width() > 350))
                    {
                        $("#input_" + idShort).attr('rows', 2);
                    }
                    /******************************************************************************/
                    
                    if( $("#help_" + idShort).val() == "show answer") 
                    {
                        $("#input_" + idShort).val(answers[idShort*1-1])
                                              .css({'backgroundColor':'lightgreen', 'border':'1px solid white'});
                        
                        $("#help_" + idShort).val("hide answer")
                                             .css({'backgroundColor':'lightgray', 'border':'1px solid lightgray'});
                    }

                    else if( $("#help_" + idShort).val() == "hide answer") 
                    {
                        $("#input_" + idShort).val("").css({'backgroundColor':'', 'border':'1px solid lightgray'});
                        
                        $("#help_" + idShort).val("show answer")
                                             .css({'backgroundColor':'lightblue', 'border':'1px solid lightblue'});
                        
                        $("#input_" + idShort).attr('rows', 1);
                    } 
                }
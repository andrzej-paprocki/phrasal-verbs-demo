            function myFunction(id) 
            {
                var width = $('#' + id).width();
                width = width * 1;                               
                var idShort = id.split("_")[1];
                idShort = idShort*1;

                var delta;

                var heightAktivnogo = document.getElementById(id).getBoundingClientRect().height;
                var heightInvisibleTop = document.getElementById('invisibleTop').height;
                var heightInvisibleTop = document.getElementById('invisibleTop').getBoundingClientRect().height; // ???
                var heightSection_1 = document.getElementById("section_1").getBoundingClientRect().height;
                var heightSection_2 = document.getElementById("section_2").getBoundingClientRect().height;
                var heightSection_3 = document.getElementById("section_3").getBoundingClientRect().height;
                var heightSection_4 = document.getElementById("section_4").getBoundingClientRect().height;

                var otkat_1Height = document.getElementById("otkat_1").getBoundingClientRect().height;
                var otkat_2Height = document.getElementById("otkat_2").getBoundingClientRect().height;
                var otkat_3Height = document.getElementById("otkat_3").getBoundingClientRect().height;
                var otkat_4Height = document.getElementById("otkat_4").getBoundingClientRect().height;


                    $('#invisibleTop').css('height', heightAktivnogo);

                    switch (idShort) 
                    {
                        case 1:
                            delta = - heightAktivnogo/* + 'px'*/;
                        break;

                        case 2:
                            delta = heightSection_1 + (idShort-1)*1.5*16*2/* + 'px'*/;
                        break;

                        case 3:
                            delta = heightSection_1 + heightSection_2 + (idShort-1)*1.5*16*2/* + 'px'*/;
                        break;

                        case 4:
                            delta = heightSection_1 + heightSection_2 + heightSection_3 + (idShort-1)*1.5*16*2/* + 'px'*/;
                        break;

                        default:
                        break;
                    }

// width > 480 /////////////////////////////////////////////////////////////////////////////////////////////////
                if (width > 480)
                {   
                    if( $('#lock_' + idShort).text() == "to fix") 
                    { 
                        switch (id)  
                        {
                            case "otkat_1":
                                if ($('#lock_1').text() == "to fix") 
                                {
                                    $('#otkat_1').removeClass('words').addClass('onMonitor');
                                    $('#lock_1').text("to unfix");
                                            // $('#etiketka_1').text("xxx");
                                            // $('#etiketka_1').removeClass('etiketka').addClass('onEtiketka');
                                }

                                else if ($('#lock_1').text() == "to unfix") 
                                {
                                    $('#otkat_1').removeClass('onMonitor').addClass('words');
                                    $('#lock_1').text("to fix");
                                            // $('#etiketka_1').removeClass('onEtiketka').addClass('etiketka');
                                            // $('#etiketka_1').text("click to unfix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_2":
                                if ($('#lock_1').text() == "to unfix") 
                                {
                                    $('#otkat_1').removeClass('onMonitor').addClass('words');
                                    $('#lock_1').text("to fix");

                                    if ($('#lock_2').text() == "to fix") 
                                    {
                                        $('#otkat_2').removeClass('words').addClass('onMonitor');
                                        $('#lock_2').text("to unfix");
                                        delta += $('#otkat_1').height() + 40;
                                    }
                                }

                                else if ($('#lock_2').text() == "to unfix") 
                                {
                                    $('#otkat_2').removeClass('onMonitor').addClass('words');
                                    $('#lock_2').text("to fix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_3":
                                if ($('#lock_2').text() == "to unfix") 
                                {
                                    $('#otkat_2').removeClass('onMonitor').addClass('words');
                                    $('#lock_2').text("to fix");

                                    if ($('#lock_3').text() == "to fix") 
                                    {
                                        $('#otkat_3').removeClass('words').addClass('onMonitor');
                                        $('#lock_3').text("to unfix");
                                        delta += $('#otkat_2').height() + 40;
                                    }
                                }

                                else if ($('#lock_3').text() == "to unfix") 
                                {
                                    $('#otkat_3').removeClass('onMonitor').addClass('words');
                                    $('#lock_3').text("to fix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_4":
                                if ($('#lock_3').text() == "to unfix") 
                                {
                                    $('#otkat_3').removeClass('onMonitor').addClass('words');
                                    $('#lock_3').text("to fix");

                                    if ($('#lock_4').text() == "to fix") 
                                    {
                                        $('#otkat_4').removeClass('words').addClass('onMonitor');
                                        $('#lock_4').text("to unfix");
                                        delta += $('#otkat_3').height() + 40;
                                    }
                                }

                                else if ($('#lock_4').text() == "to unfix") 
                                {
                                    $('#otkat_4').removeClass('onMonitor').addClass('words');
                                    $('#lock_4').text("to fix");
                                }
                            break;
                        }

                            /*----------------------------------------------------------------------------------------------*/

                        $('#container').css({'top':'-0.1rem'});
                        $('#' + id).removeClass('words').addClass('onMonitor');
                        $('html, body').animate({scrollTop:delta},500);
                        $('#lock_' + idShort).text("to unfix");
                    }

                    else if( $('#lock_' + idShort).text() == "to unfix") 
                    {  
                        $('#container').css({'top':'0rem'});
                        $('#' + id).removeClass('onMonitor').addClass('words');
                        $('#lock_' + idShort).text("to fix");
                        $('#container').css('top', -$('#' + id).height() - 28);
                    }
                }


// width < 480 /////////////////////////////////////////////////////////////////////////////////////////////////
                if (width <= 480)
                {
                    if( $('#lock_' + idShort).text() == "to fix") 
                    { 
                        switch (id)  
                        {
                            case "otkat_1":
                                if ($('#lock_1').text() == "to fix") 
                                {
                                    $('#otkat_1').removeClass('words').addClass('onTelephone');
                                    $('#lock_1').text("to unfix");
                                }

                                else if ($('#lock_1').text() == "to unfix") 
                                {
                                    $('#otkat_1').removeClass('onTelephone').addClass('words');
                                    $('#lock_1').text("to fix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_2":
                                if ($('#lock_1').text() == "to unfix") 
                                {
                                    $('#otkat_1').removeClass('onTelephone').addClass('words');
                                    $('#lock_1').text("to fix");

                                    if ($('#lock_2').text() == "to fix") 
                                    {
                                        $('#otkat_2').removeClass('words').addClass('onTelephone');
                                        $('#lock_2').text("to unfix");
                                        delta += $('#otkat_1').height() + 40;
                                    }
                                }

                                else if ($('#lock_2').text() == "to unfix") 
                                {
                                    $('#otkat_2').removeClass('onTelephone').addClass('words');
                                    $('#lock_2').text("to fix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_3":
                                if ($('#lock_2').text() == "to unfix") 
                                {
                                    $('#otkat_2').removeClass('onTelephone').addClass('words');
                                    $('#lock_2').text("to fix");

                                    if ($('#lock_3').text() == "to fix") 
                                    {
                                        $('#otkat_3').removeClass('words').addClass('onTelephone');
                                        $('#lock_3').text("to unfix");
                                        delta += $('#otkat_2').height() + 40;
                                    }
                                }

                                else if ($('#lock_3').text() == "to unfix") 
                                {
                                    $('#otkat_3').removeClass('onTelephone').addClass('words');
                                    $('#lock_3').text("to fix");
                                }
                            break;

                            /*----------------------------------------------------------------------------------------------*/

                            case "otkat_4":
                                if ($('#lock_3').text() == "to unfix") 
                                {
                                    $('#otkat_3').removeClass('onTelephone').addClass('words');
                                    $('#lock_3').text("to fix");

                                    if ($('#lock_4').text() == "to fix") 
                                    {
                                        $('#otkat_4').removeClass('words').addClass('onTelephone');
                                        $('#lock_4').text("to unfix");
                                        delta += $('#otkat_3').height() + 40;
                                    }
                                }

                                else if ($('#lock_4').text() == "to unfix") 
                                {
                                    $('#otkat_4').removeClass('onTelephone').addClass('words');
                                    $('#lock_4').text("to fix");
                                }
                            break;
                        }

                            /*----------------------------------------------------------------------------------------------*/

                        $('#container').css({'top':'-0.1rem'});
                        $('#' + id).removeClass('words').addClass('onTelephone');
                        $('html, body').animate({scrollTop:delta},500);
                        $('#lock_' + idShort).text("to unfix");
                    }

                    else if( $('#lock_' + idShort).text() == "to unfix") 
                    {  
                        $('#container').css({'top':'0rem'});
                        $('#' + id).removeClass('onTelephone').addClass('words');
                        $('#lock_' + idShort).text("to fix");
                        $('#container').css('top', -$('#' + id).height() - 28);
                    }
                }
                
            }

        $(function() {
            $('[class^="click"]').click(function(){
                $(this).next().fadeToggle();   
            });
        });
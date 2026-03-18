    var a1 = document.getElementById("x");
    var numer = a1.innerHTML.split(" ")[1];
    numer = numer * 1;
   
    if (numer == 137) 
    {
        $('#arrowPrev').removeClass('arrow').addClass('nopointer');
    }

    if (numer == 145) 
    {
        $('#arrowNext').removeClass('arrow').addClass('nopointer');
    }

    function opentheory() 
    {
        window.open("unit_" + numer + ".html", '_self');
    }
    
    function previous() 
    {
        if (numer > 137) 
        {
            window.open("unit_" + (numer - 1) + "_ex" + ".html", '_self');
        }
    }
    
    function next() 
    {
        if (numer < 145) 
        {
            window.open("unit_" + (numer + 1) + "_ex" + ".html", '_self');
        }
    }
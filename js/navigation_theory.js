    var a1 = document.getElementById("x");
    var numer = a1.innerHTML.split(" ")[1];
    numer = numer * 1;
    var theoryorexercises = a1.innerHTML.split(" ")[2];
    
    if (numer == 137) 
    {
        $('#arrowPrev').removeClass('arrow').addClass('nopointer');

    }

    if (numer == 145) 
    {
        $('#arrowNext').removeClass('arrow').addClass('nopointer');

    }

    function openexercises() 
    {
        window.open("unit_" + numer + "_ex" + ".html", "_self");
    }  
    
    function previous() 
    {
        if (numer > 137) 
        {
            window.open("unit_" + (numer - 1) + ".html", "_self");
        }
    }
    
    function next() 
    {
        if (numer < 145) 
        {
            window.open("unit_" + (numer + 1) + ".html", "_self");
        }
    }

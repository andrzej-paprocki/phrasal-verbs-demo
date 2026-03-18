otkat_1.addEventListener('click', myFunction_words);;

function myFunction_words() 
{
    var tmp = otkat_1;

    tmp.id = otkat_1.id.toUpperCase();  

    var a = tmp.getBoundingClientRect();

    // alert(a.bottom);  

    var b = section_1.getBoundingClientRect(); 

    // alert(b.bottom); 

    if (a.bottom == b.bottom)
    {
        alert("Ура, заработало.");
    }

}

// myFunction_words();
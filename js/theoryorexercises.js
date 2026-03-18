    var a1 = document.getElementById("x");
    var numer = a1.innerHTML.split(" ")[1];
    numer = numer * 1;
    var theoryorexercises = a1.innerHTML.split(" ")[2];
    
    if (theoryorexercises == "theory") theory.style.fontWeight = "bold";
    
    if (theoryorexercises == "exercises") exercises.style.fontWeight = "bold";
